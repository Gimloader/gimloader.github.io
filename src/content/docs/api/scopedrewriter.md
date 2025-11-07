---
title: Rewriter Api
description: Documentation for the Rewriter Api
---
# [ScopedApi](/api/scopedapi).rewriter

The rewriter API allows you to modify the bundled code of Gimkit in order to expose values
or change certain behaviors. Due to the unpredictable nature of bundling, you cannot assume that variable names
will remain the same beteen updates.

## Methods

### addParseHook()

> **addParseHook**(`prefix`, `callback`): () => `void`

Creates a hook that will modify the code of a script before it is run.
This value is cached, so this hook may not run on subsequent page loads.
addParseHook should always be called in the top level of a script.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` \| `boolean` | Limits the hook to only running on scripts beginning with this prefix. Passing `true` will only run on the index script, and passing `false` will run on all scripts. |
| `callback` | (`code`) => `string` | The function that will modify the code. Should return the modified code. Cannot have side effects. |

#### Returns

`Function`

##### Returns

`void`

***

### createShared()

> **createShared**(`id`, `value`): `string`

Creates a shared value that can be accessed from any script.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | A unique identifier for the shared value. |
| `value` | `any` | The value to be shared. |

#### Returns

`string`

A string representing the code to access the shared value.

***

### removeSharedById()

> **removeSharedById**(`id`): `void`

Removes the shared value with a certain id created by [createShared](ScopedRewriter#createshared)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`
