---
title: Global Rewriter Api
description: Documentation for the Global Rewriter Api
---
# [GL](/api/api).rewriter

The rewriter API allows you to modify the bundled code of Gimkit in order to expose values
or change certain behaviors. Due to the unpredictable nature of bundling, you cannot assume that variable names
will remain the same beteen updates.

## Methods

### addParseHook()

> **addParseHook**(`pluginName`, `prefix`, `callback`): () => `void`

Creates a hook that will modify the code of a script before it is run.
This value is cached, so this hook may not run on subsequent page loads.
addParseHook should always be called in the top level of a script.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | The name of the plugin creating the hook. |
| `prefix` | `string` \| `boolean` | Limits the hook to only running on scripts beginning with this prefix. Passing `true` will only run on the index script, and passing `false` will run on all scripts. |
| `callback` | (`code`) => `string` | The function that will modify the code. Should return the modified code. Cannot have side effects. |

#### Returns

`Function`

##### Returns

`void`

***

### createShared()

> **createShared**(`pluginName`, `id`, `value`): `string`

Creates a shared value that can be accessed from any script.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | The name of the plugin creating the shared value. |
| `id` | `string` | A unique identifier for the shared value. |
| `value` | `any` | The value to be shared. |

#### Returns

`string`

A string representing the code to access the shared value.

***

### removeParseHooks()

> **removeParseHooks**(`pluginName`): `void`

Removes all hooks created by a certain plugin

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginName` | `string` |

#### Returns

`void`

***

### removeShared()

> **removeShared**(`pluginName`): `void`

Removes all values created by [createShared](Rewriter#createshared) by a certain plugin

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginName` | `string` |

#### Returns

`void`

***

### removeSharedById()

> **removeSharedById**(`pluginName`, `id`): `void`

Removes the shared value with a certain id created by [createShared](Rewriter#createshared)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginName` | `string` |
| `id` | `string` |

#### Returns

`void`
