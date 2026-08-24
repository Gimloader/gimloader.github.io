---
title: Commands Api
description: Documentation for Gimloader's Commands Api
---

# [api](/api/api).commands

Functions for adding commands to the command palette

## Methods

### addCommand()

> **addCommand**(`options`, `callback`): () => `void`

Adds a command to the user's command palette. Can request additional input within the callback.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `keywords?`: readonly `string`[]; `text`: `string` \| (() => `string`); `hidden?`: `boolean`; \} |
| `options.keywords?` | readonly `string`[] |
| `options.text` | `string` \| (() => `string`) |
| `options.hidden?` |
| `callback` | (`context`) => `void` \| `Promise`\<`void`\> |

#### Returns

A function to remove the command

() => `void`

#### Example

```js
api.commands.addCommand({
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
