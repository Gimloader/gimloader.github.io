---
title: Storage Api
description: Documentation for Gimloader's Storage Api
---

# [api](/api/api).storage

Functions for persisting data between reloads

## Methods

### deleteValue()

> **deleteValue**(`key`): `void`

Removes a value which has been saved

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`void`

***

### getValue()

> **getValue**(`key`, `defaultValue?`): `any`

Gets a value that has previously been saved

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `defaultValue?` | `any` |

#### Returns

`any`

***

### idbClear()

> **idbClear**(): `Promise`\<`void`\>

Clears the script's IndexedDB storage

#### Returns

`Promise`\<`void`\>

***

### idbDelete()

> **idbDelete**(`key`): `Promise`\<`void`\>

Deletes a value from the script's IndexedDB store

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `any` |

#### Returns

`Promise`\<`void`\>

***

### idbGet()

> **idbGet**(`key`): `Promise`\<`any`\>

Gets a value from the script's IndexedDB store

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `any` |

#### Returns

`Promise`\<`any`\>

***

### idbKeys()

> **idbKeys**(): `Promise`\<`any`[]\>

Gets all keys from the script's IndexedDB storage

#### Returns

`Promise`\<`any`[]\>

***

### idbSet()

> **idbSet**(`key`, `value`): `Promise`\<`void`\>

Sets a value in the script's IndexedDB store. Can be anything which is structured-clonable,
including files, objects, arrays, etc.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`Promise`\<`void`\>

***

### onChange()

> **onChange**(`key`, `callback`): () => `void`

Adds a listener for when a stored value with a certain key changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `any` |
| `callback` | (`value`, `remote`) => `void` |

#### Returns

a function that removes the listener when called

() => `void`

#### Example

```js
api.storage.onChange("key", (value, remote) => {
    console.log("Value is now", value);
    console.log("Value was updated", remote ? "remotely" : "locally");
});
```

***

### setValue()

> **setValue**(`key`, `value`): `void`

Sets a value which can be retrieved later, persisting through reloads

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`
