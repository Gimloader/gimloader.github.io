---
title: Colyseus Api
description: Documentation for Gimloader's Colyseus Api
---

# [api](/api/api).[net](/api/net).colyseus

The colyseus api is for sending and recieving data in 2d modes.
It extends [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2)
and uses wildcards with ":" as a delimiter.
```js
// fired when data is recieved on a certain channel
api.net.colyseus.on("CHANNEL", (data, editFn) => {
    editFn("new data"); // Replace the data with "new data" before Gimkit processes it
});

// fired when data is sent on a certain channel
api.net.colyseus.on("send:CHANNEL", (data, editFn) => {
    editFn(null); // Cancel the data being sent
});
```

## Accessors

### room

#### Get Signature

> **get** **room**(): `any`

The colyseus room that the client is connected to, or null if there is no connection

##### Returns

`any`

***

### state

#### Get Signature

> **get** **state**(): `GimkitSchema`

Gimkit's internal Colyseus state

##### Returns

`GimkitSchema`

## Methods

### on()

> **on**\<`C`\>(`channel`, `listener`): `Listener` \| `ColyseusApi`

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages2d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | (`data`, `editFn`) => `void` |

#### Returns

`Listener` \| `ColyseusApi`

***

### onAny()

> **onAny**(`listener`): `ColyseusApi`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`channel`, `data`, `editFn`) => `void` |

#### Returns

`ColyseusApi`

***

### send()

> **send**\<`C`\>(`channel`, ...`args`): `void`

Sends a message to the server on a specific channel

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `SentMessages2d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `data` | `any` |

#### Returns

`void`
