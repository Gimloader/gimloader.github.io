---
title: Colyseus Api
description: Documentation for Gimloader's Colyseus Api
---

# [api](/api/api).[net](/api/net).colyseus

The colyseus api is for sending and recieving data in 2d modes.
```js
// fired when data is recieved on a certain channel
api.net.colyseus.on("CHANNEL", (data) => {
    return "new data"; // Replace the data with "new data" before Gimkit processes it
});

// fired when data is sent on a certain channel
api.net.colyseus.on("send:CHANNEL", (data) => {
    return null; // Cancel the data being sent
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

### off()

> **off**\<`C`\>(`channel`, `listener`): `void`

Removes a listener added by on or once

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages2d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | (`data`) => `void` \| `Messages2d`\[`C`\] \| `null` |

#### Returns

`void`

***

### offAny()

> **offAny**(`listener`): `void`

Removes a listener added by onAny

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`channel`, `data`) => `any` |

#### Returns

`void`

***

### on()

> **on**\<`C`\>(`channel`, `listener`): `void`

Listens for an incoming or outgoing message on a specific channel.
Returning a value from the listener updates what is received.
Returning null cancels the message entirely.

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages2d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | (`data`) => `void` \| `Messages2d`\[`C`\] \| `null` |

#### Returns

`void`

***

### onAny()

> **onAny**(`listener`): `void`

Listens for any messages on any channel.
Returning a value from the listener updates what is sent.
Returning null cancels the message entirely.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`channel`, `data`) => `any` |

#### Returns

`void`

***

### once()

> **once**\<`C`\>(`channel`, `listener`): `void`

Listens for the next incoming or outgoing message on a specific channel.
Returning a value from the listener updates what is received.
Returning null cancels the message entirely.

#### Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `Messages2d` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel` | `C` |
| `listener` | (`data`) => `void` \| `Messages2d`\[`C`\] \| `null` |

#### Returns

`void`

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

***

### sendDirect()

> **sendDirect**\<`C`\>(`channel`, ...`args`): `void`

Sends a message to the server on a specific channel, bypassing listeners added by plugins

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
