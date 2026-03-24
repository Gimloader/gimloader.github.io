---
title: Net Api
description: Documentation for the Net Api
---
# [ScopedApi](/api/scopedapi).net

The net api extends [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2)
and uses wildcards with ":" as a delimiter.
```js
// fired when data is recieved on a certain channel
api.net.on("CHANNEL", (data, editFn) => {
    editFn("new data"); // Replace the data with "new data" before Gimkit processes it
});

// fired when data is sent on a certain channel
api.net.on("send:CHANNEL", (data, editFn) => {
    editFn(null); // Cancel the data being sent
});

// you can also use wildcards, eg
api.net.on("send:*", () => {});
```

## Accessors

### gamemode

#### Get Signature

> **get** **gamemode**(): `string`

The id of the gamemode the player is currently playing

##### Returns

`string`

***

### isHost

#### Get Signature

> **get** **isHost**(): `boolean`

Whether the user is the one hosting the current game

##### Returns

`boolean`

***

### room

#### Get Signature

> **get** **room**(): `any`

The room that the client is connected to, or null if there is no connection

##### Returns

`any`

***

### state

#### Get Signature

> **get** **state**(): `GimkitSchema`

Gimkit's internal Colyseus state

##### Returns

`GimkitSchema`

***

### type

#### Get Signature

> **get** **type**(): `ConnectionType`

Which type of server the client is currently connected to

##### Returns

`ConnectionType`

## Methods

### modifyFetchRequest()

> **modifyFetchRequest**(`path`, `callback`): () => `void`

Runs a callback when a request is made that matches a certain path (can have wildcards)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `callback` | (`options`) => `any` |

#### Returns

`Function`

A function to stop the modification

##### Returns

`void`

#### Example

```js
api.net.modifyFetchRequest("/api/experiences", (request) => {
    console.log(request.data);
    request.data.modified = true;

    return null; // Cancel the request
});
```

***

### modifyFetchResponse()

> **modifyFetchResponse**(`path`, `callback`): () => `void`

Runs a callback when a response is recieved for a request under a certain path (can have wildcards)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `callback` | (`response`) => `any` |

#### Returns

`Function`

A function to stop the modification

##### Returns

`void`

#### Example

```js
api.net.modifyFetchResponse("/api/experience/map/hooks", (data) => {
    console.log(data);
    return "modified data";
});
```

***

### onLoad()

> **onLoad**(`callback`, `gamemode`?): () => `void`

Runs a callback when the game is loaded, or runs it immediately if the game has already loaded.
If the @gamemode header is set the callback will only fire if the gamemode matches one of the provided gamemodes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`type`, `gamemode`) => `void` |
| `gamemode`? | `string` \| readonly `string`[] |

#### Returns

`Function`

A function to cancel waiting for load

##### Returns

`void`

***

### send()

> **send**(`channel`, `message`?): `void`

Sends a message to the server on a specific channel

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `string` |
| `message`? | `any` |

#### Returns

`void`
