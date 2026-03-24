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

#### Example

```js
const object = { method: () => 100 };
api.patcher.after(object, "method", (thisVal, args, returnVal) => {
    console.log("Came after:", returnVal);
});

object.method(); // Logs "Came after: 100"
```

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

#### Example

```js
const object = { method: (arg1, arg2) => 100 };
api.patcher.before(object, "method", (thisVal, args) => {
    console.log("Came before:", args);
});

object.method(5, 6); // Logs "Came before: [5, 6]"
```

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

#### Example

```js
const object = { method: (arg1, arg2) => 100 };
api.patcher.instead(object, "method", (thisVal, args) => {
    return args[0] + args[1];
});

console.log(object.method(5, 6)); // Logs "11" instead of "100"
```

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

#### Example

```js
const object = { method: (arg1, arg2) => 100 };
api.patcher.swap(object, "method", (arg1, arg2) => {
    return arg1 + arg2;
});

console.log(object.method(5, 6)); // Logs "11" instead of "100"
```
