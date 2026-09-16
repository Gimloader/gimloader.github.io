---
title: Blueboat Api
description: Documentation for Gimloader's Blueboat Api
---

# [api](/api/api).[net](/api/net).blueboat

The colyseus api is for sending and recieving data in non-2d (classic) modes.
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

### off()

> **off**\<`C`\>(`channel`, `listener`): `void`

Removes a listener added by on or once

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages1d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | `Listener`\<`Messages1d`\[`C`\]\> |

#### Returns

`void`

***

### offAny()

> **offAny**(`listener`): `void`

Removes a listener added by onAny

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | `OnAnyListener` |

#### Returns

`void`

***

### on()

> **on**\<`C`\>(`channel`, `listener`): `void`

Listens for an incoming or outgoing message on a specific channel

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages1d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | `Listener`\<`Messages1d`\[`C`\]\> |

#### Returns

`void`

***

### onAny()

> **onAny**(`listener`): `void`

Listens for any messages on any channel

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | `OnAnyListener` |

#### Returns

`void`

***

### once()

> **once**\<`C`\>(`channel`, `listener`): `void`

Listens for the next incoming or outgoing message on a specific channel

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages1d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | `Listener`\<`Messages1d`\[`C`\]\> |

#### Returns

`void`

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

***

### sendDirect()

> **sendDirect**\<`C`\>(`channel`, ...`args`): `void`

Sends a message to the server on a specific channel, bypassing listeners added by plugins

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
