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

> **addParseHook**(`prefix`, `modifier`): () => `void`

Creates a hook that will modify the code of a script before it is run.
This value is cached, so this hook may not run on subsequent page loads.
addParseHook should always be called in the top level of a script.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` \| `boolean` | Limits the hook to only running on scripts beginning with this prefix. Passing `true` will only run on the index script, and passing `false` will run on all scripts. |
| `modifier` | (`code`) => `string` | A function that will modify the code, which should return the modified code. |

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

### exposeVar()

> **exposeVar**(`prefix`, `exposer`): () => `void`

A utility function that exposes a variable based on regex to get its name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` \| `boolean` |
| `exposer` | \{ `callback`: (`val`) => `void`; `check`: `string`; `find`: `RegExp`; `multiple`: `boolean`; \} |
| `exposer.callback` | (`val`) => `void` |
| `exposer.check`? | `string` |
| `exposer.find` | `RegExp` |
| `exposer.multiple`? | `boolean` |

#### Returns

`Function`

##### Returns

`void`

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

***

### runInScope()

> **runInScope**(`prefix`, `callback`): () => `void`

Runs code in the scope of modules when they are loaded, or when runInScope is called with them already loaded.
Returning true from the callback will remove the hook.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` \| `boolean` |
| `callback` | (`code`, `run`) => `true` \| `void` |

#### Returns

`Function`

##### Returns

`void`
