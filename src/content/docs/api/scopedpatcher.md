---
title: Patcher Api
description: Documentation for the Patcher Api
---
# [ScopedApi](/api/scopedapi).patcher

## Methods

### after()

> **after**\<`O`, `K`\>(`object`, `method`, `callback`): () => `void`

Runs a callback after a function on an object has been run

#### Type Parameters

| Type Parameter |
| ------ |
| `O` *extends* `object` |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `O` |
| `method` | `K` |
| `callback` | (`thisVal`, `args`, `returnVal`) => `any` |

#### Returns

`Function`

A function to remove the patch

##### Returns

`void`

***

### before()

> **before**\<`O`, `K`\>(`object`, `method`, `callback`): () => `void`

Runs a callback before a function on an object has been run.
Return true from the callback to prevent the function from running

#### Type Parameters

| Type Parameter |
| ------ |
| `O` *extends* `object` |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `O` |
| `method` | `K` |
| `callback` | (`thisVal`, `args`) => `boolean` \| `void` |

#### Returns

`Function`

A function to remove the patch

##### Returns

`void`

***

### instead()

> **instead**\<`O`, `K`\>(`object`, `method`, `callback`): () => `void`

Runs a function instead of a function on an object

#### Type Parameters

| Type Parameter |
| ------ |
| `O` *extends* `object` |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `O` |
| `method` | `K` |
| `callback` | (`thisVal`, `args`) => `any` |

#### Returns

`Function`

A function to remove the patch

##### Returns

`void`

***

### swap()

> **swap**\<`O`, `K`\>(`object`, `method`, `callback`): () => `void`

Replaces a function on an object with another function

#### Type Parameters

| Type Parameter |
| ------ |
| `O` *extends* `object` |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `O` |
| `method` | `K` |
| `callback` | (...`args`) => `any` |

#### Returns

`Function`

A function to remove the patch

##### Returns

`void`
