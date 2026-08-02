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

### Callbacks

#### Get Signature

> **get** **Callbacks**(): `any`

Colyseus's Callbacks function for listening to state changes

##### Returns

`any`

***

### gamemode

#### Get Signature

> **get** **gamemode**(): `null` \| `string`

The id of the gamemode the player is currently playing

##### Returns

`null` \| `string`

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

### addListener()

> **addListener**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

### emit()

> **emit**(`event`, ...`args`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| ...`args` | `any`[] |

#### Returns

`void`

***

### emitAsync()

> **emitAsync**(`event`, ...`args`): `Promise`\<`any`[]\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| ...`args` | `any`[] |

#### Returns

`Promise`\<`any`[]\>

***

### eventNames()

> **eventNames**(`nsAsArray`?): (`string` \| `symbol` \| `event`[])[]

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nsAsArray`? | `boolean` |

#### Returns

(`string` \| `symbol` \| `event`[])[]

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

***

### hasListeners()

> **hasListeners**(`event`): `Boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |

#### Returns

`Boolean`

***

### listenerCount()

> **listenerCount**(`event`): `number`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |

#### Returns

`number`

***

### listeners()

> **listeners**(`event`): `ListenerFn`[]

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |

#### Returns

`ListenerFn`[]

***

### listenersAny()

> **listenersAny**(): `ListenerFn`[]

#### Returns

`ListenerFn`[]

***

### listenTo()

#### Call Signature

> **listenTo**(`target`, `events`, `options`?): `EventEmitter2`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `GeneralEventEmitter` |
| `events` | `string` \| `string`[] |
| `options`? | `ListenToOptions` |

##### Returns

`EventEmitter2`

##### Inherited from

`BaseNetApi.listenTo`

#### Call Signature

> **listenTo**(`target`, `events`, `options`?): `EventEmitter2`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `GeneralEventEmitter` |
| `events` | `Record`\<`string`, `string`\> |
| `options`? | `ListenToOptions` |

##### Returns

`EventEmitter2`

##### Inherited from

`BaseNetApi.listenTo`

***

### many()

> **many**(`event`, `timesToListen`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `timesToListen` | `number` |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

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

### off()

> **off**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

### offAny()

> **offAny**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`, ...`data`) => `void` |

#### Returns

`void`

***

### on()

> **on**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

### onAny()

> **onAny**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`, ...`data`) => `void` |

#### Returns

`void`

***

### once()

> **once**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

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

### prependAny()

> **prependAny**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`, ...`data`) => `void` |

#### Returns

`void`

***

### prependListener()

> **prependListener**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

### prependMany()

> **prependMany**(`event`, `timesToListen`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `timesToListen` | `number` |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

### prependOnceListener()

> **prependOnceListener**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

`void`

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event`? | `string` \| `string`[] |

#### Returns

`void`

***

### removeListener()

> **removeListener**(`event`, `listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `listener` | (...`data`) => `void` |

#### Returns

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

***

### setMaxListeners()

> **setMaxListeners**(`amount`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`void`

***

### stopListeningTo()

> **stopListeningTo**(`target`, `event`?): `Boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `GeneralEventEmitter` |
| `event`? | `string` \| `string`[] |

#### Returns

`Boolean`

***

### waitFor()

#### Call Signature

> **waitFor**(`event`, `timeout`?): `CancelablePromise`\<`any`[]\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `timeout`? | `number` |

##### Returns

`CancelablePromise`\<`any`[]\>

##### Inherited from

`BaseNetApi.waitFor`

#### Call Signature

> **waitFor**(`event`, `filter`?): `CancelablePromise`\<`any`[]\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `filter`? | `WaitForFilter` |

##### Returns

`CancelablePromise`\<`any`[]\>

##### Inherited from

`BaseNetApi.waitFor`

#### Call Signature

> **waitFor**(`event`, `options`?): `CancelablePromise`\<`any`[]\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `string`[] |
| `options`? | `WaitForOptions` |

##### Returns

`CancelablePromise`\<`any`[]\>

##### Inherited from

`BaseNetApi.waitFor`
