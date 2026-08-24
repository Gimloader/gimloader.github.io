---
title: Net Api
description: Documentation for Gimloader's Net Api
---

# [api](/api/api).net

Functions to interact with the current connection to the server

## Properties

### blueboat

> **blueboat**: [`blueboat`](/api/blueboat)

Tools for sending and receiving data in non-2d modes

***

### colyseus

> **colyseus**: [`colyseus`](/api/colyseus)

Tools for sending and receiving data and interacting with state in 2d modes

## Accessors

### Callbacks

#### Get Signature

> **get** **Callbacks**(): `any`

Colyseus's Callbacks function for listening to state changes

##### Returns

`any`

***

### gamemode

#### Get Signature

> **get** **gamemode**(): `string` \| `null`

The id of the gamemode the player is currently playing

##### Returns

`string` \| `null`

***

### isHost

#### Get Signature

> **get** **isHost**(): `boolean`

Whether the user is the one hosting the current game

##### Returns

`boolean`

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

A function to stop the modification

() => `void`

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

A function to stop the modification

() => `void`

#### Example

```js
api.net.modifyFetchResponse("/api/experience/map/hooks", (data) => {
    console.log(data);
    return "modified data";
});
```

***

### onLoad()

> **onLoad**(`callback`, `gamemode?`): () => `void`

Runs a callback when the game is loaded, or runs it immediately if the game has already loaded.
If the @gamemode header is set the callback will only fire if the gamemode matches one of the provided gamemodes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`type`, `gamemode`) => `void` |
| `gamemode?` | `string` \| readonly `string`[] |

#### Returns

A function to cancel waiting for load

() => `void`
