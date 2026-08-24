---
title: Blueboat Api
description: Documentation for Gimloader's Blueboat Api
---

# [api](/api/api).[net](/api/net).blueboat

The colyseus api is for sending and recieving data in non-2d (classic) modes.
It extends [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2)
and uses wildcards with ":" as a delimiter.
```js
// fired when data is recieved on a certain channel
api.net.blueboat.on("CHANNEL", (data, editFn) => {
    editFn("new data"); // Replace the data with "new data" before Gimkit processes it
});

// fired when data is sent on a certain channel
api.net.blueboat.on("send:CHANNEL", (data, editFn) => {
    editFn(null); // Cancel the data being sent
});
```

## Accessors

### room

#### Get Signature

> **get** **room**(): `any`

The blueboat room that the client is connected to, or null if there is no connection

##### Returns

`any`

## Methods

### on()

> **on**\<`C`\>(`channel`, `listener`): `Listener` \| `BlueboatApi`

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages1d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | (`data`, `editFn`) => `void` |

#### Returns

`Listener` \| `BlueboatApi`

***

### onAny()

> **onAny**(`listener`): `BlueboatApi`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`channel`, `data`, `editFn`) => `void` |

#### Returns

`BlueboatApi`

***

### send()

> **send**\<`C`\>(`channel`, ...`args`): `void`

Sends a message to the server on a specific channel

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `SentMessages1d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `data` | `any` |

#### Returns

`void`
