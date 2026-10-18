---
title: Patcher Api
description: Documentation for Gimloader's Patcher Api
---

# [api](/api/api).patcher

Functions for intercepting the arguments and return values of functions

## Methods

### after()

> **after**\<`O`, `K`\>(`object`, `method`, `callback`, `options?`): () => `void`

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
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const object = { method: () => 100 };
api.patcher.after(object, "method", (thisVal, args, returnVal) => {
    console.log("Came after:", returnVal);
});

object.method(); // Logs "Came after: 100"
```

***

### afterReact()

> **afterReact**\<`F`\>(`component`, `callback`, `options?`): () => `void`

Runs a callback after a React component has been run without changing the reference to the original component.

#### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | `F` |
| `callback` | (`thisVal`, `args`, `returnVal`) => `any` |
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const ReactComponent = () => {...}; // A React component used by Gimkit, likely gotten through `api.rewriter.exposeVar`
api.patcher.afterReact(ReactComponent, (thisVal, args, returnVal) => {
    console.log("Came after:", returnVal); // Logs once the component is rendered
});
```

***

### before()

> **before**\<`O`, `K`\>(`object`, `method`, `callback`, `options?`): () => `void`

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
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const object = { method: (arg1, arg2) => 100 };
api.patcher.before(object, "method", (thisVal, args) => {
    console.log("Came before:", args);
});

object.method(5, 6); // Logs "Came before: [5, 6]"
```

***

### beforeReact()

> **beforeReact**\<`F`\>(`component`, `callback`, `options?`): () => `void`

Runs a callback before a React component is run without changing the reference to the original component.
Return true from the callback to prevent the component from running

#### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | `F` |
| `callback` | (`thisVal`, `args`) => `boolean` \| `void` |
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const ReactComponent = () => {...}; // A React component used by Gimkit, likely gotten through `api.rewriter.exposeVar`
api.patcher.beforeReact(ReactComponent, (thisVal, args) => {
    console.log("Came before:", args); // Logs before the component is rendered
});
```

***

### instead()

> **instead**\<`O`, `K`\>(`object`, `method`, `callback`, `options?`): () => `void`

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
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const object = { method: (arg1, arg2) => 100 };
api.patcher.instead(object, "method", (thisVal, args) => {
    return args[0] + args[1];
});

console.log(object.method(5, 6)); // Logs "11" instead of "100"
```

***

### insteadReact()

> **insteadReact**\<`F`\>(`component`, `callback`, `options?`): () => `void`

Runs a callback instead of a React component without changing the reference to the original component.

#### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | `F` |
| `callback` | (`thisVal`, `args`) => `any` |
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const ReactComponent = () => {...}; // A React component used by Gimkit, likely gotten through `api.rewriter.exposeVar`
api.patcher.insteadReact(ReactComponent, (thisVal, args) => {
    return GL.React.createElement("div", null, "New component!");
});
```

***

### swap()

> **swap**\<`O`, `K`\>(`object`, `method`, `callback`, `options?`): () => `void`

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
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const object = { method: (arg1, arg2) => 100 };
api.patcher.swap(object, "method", (arg1, arg2) => {
    return arg1 + arg2;
});

console.log(object.method(5, 6)); // Logs "11" instead of "100"
```

***

### swapReact()

> **swapReact**\<`F`\>(`component`, `callback`, `options?`): () => `void`

Swaps a React component with another React component without changing the reference to the original component.

#### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | `F` |
| `callback` | (...`args`) => `any` |
| `options?` | `PatchOptions` |

#### Returns

A function to remove the patch

() => `void`

#### Example

```js
const ReactComponent = () => {...}; // A React component used by Gimkit, likely gotten through `api.rewriter.exposeVar`
api.patcher.insteadReact(ReactComponent, (arg1, arg2) => {
    return GL.React.createElement("div", null, "New component!");
});
```
