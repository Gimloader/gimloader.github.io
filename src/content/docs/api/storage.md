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

### onChange()

> **onChange**(`key`, `callback`): () => `void`

Adds a listener for when a stored value with a certain key changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
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
