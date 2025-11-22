---
title: Commands Api
description: Documentation for the Commands Api
---
# [ScopedApi](/api/scopedapi).commands

An API for adding commands to the command palette

```ts
commands.addCommand({
    text: "Do a thing",
    keywords: ["execute", "run"],
    hidden: () => false
}, async (context) => {
   const choice = await context.select({
       title: "Choose an option",
       options: [
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" }
       ]
   });
   const number = await context.number({
      title: "Pick a number"
      min: 1,
      max: 10,
      decimal: true
   });
   const string = await context.string({
      title: "Enter a string",
      maxLength: 20
   });

   console.log("User chose:", { choice, number, string });
});
```

## Methods

### addCommand()

> **addCommand**(`options`, `callback`): () => `void`

Adds a command to the user's command palette. Can request additional input within the callback.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `hidden`: () => `boolean`; `keywords`: `string`[]; `text`: `string` \| () => `string`; \} |
| `options.hidden`? | () => `boolean` |
| `options.keywords`? | `string`[] |
| `options.text` | `string` \| () => `string` |
| `callback` | (`context`) => `void` \| `Promise`\<`void`\> |

#### Returns

`Function`

##### Returns

`void`
