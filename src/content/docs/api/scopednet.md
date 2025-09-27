---
title: Scoped Net Api
description: Documentation for the Scoped Net Api
---
# [ScopedApi](/api/scopedapi).net

The net api extends [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2)
and uses wildcards with ":" as a delimiter.

The following events are emitted:

```ts
// fired when data is recieved on a certain channel
net.on(CHANNEL, (data, editFn) => {})

// fired when data is sent on a certain channel
net.on(send:CHANNEL, (data, editFn) => {})

// fired when the game loads with a certain type
net.on(load:TYPE, (type) => {})

// you can also use wildcards, eg
net.on("send:*", () => {})
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

### type

#### Get Signature

> **get** **type**(): `ConnectionType`

Which type of server the client is currently connected to

##### Returns

`ConnectionType`

## Methods

### onLoad()

> **onLoad**(`callback`, `gamemode`?): () => `void`

Runs a callback when the game is loaded, or runs it immediately if the game has already loaded.
If the @gamemode header is set the callback will only fire if the gamemode matches one of the provided gamemodes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`type`, `gamemode`) => `void` |
| `gamemode`? | `string` \| `string`[] |

#### Returns

`Function`

A function to cancel waiting for load

##### Returns

`void`

***

### send()

> **send**(`channel`, `message`): `void`

Sends a message to the server on a specific channel

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `string` |
| `message` | `any` |

#### Returns

`void`
