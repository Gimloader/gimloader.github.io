---
title: UI Api
description: Documentation for Gimloader's UI Api
---

# [api](/api/api).UI

Functions for interacting with user interfaces

## Properties

### toast

> **toast**: `ToastType`

The toast api exposed by svelte-sonner

## Accessors

### message

#### Get Signature

> **get** **message**(): `AntdMessage`

Gimkit's message object

[https://ant.design/components/message#api](https://ant.design/components/message#api)

##### Returns

`AntdMessage`

***

### modal

#### Get Signature

> **get** **modal**(): `AntdModal`

Gimkit's modal object

[https://ant.design/components/modal#modalmethod](https://ant.design/components/modal#modalmethod)

##### Returns

`AntdModal`

***

### notification

#### Get Signature

> **get** **notification**(): `AntdNotification`

Gimkit's notification object, only available when joining or playing a game

[https://ant.design/components/notification#api](https://ant.design/components/notification#api)

##### Returns

`AntdNotification`

## Methods

### addStyles()

> **addStyles**(`style`): () => `void`

Adds a style to the DOM

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | `string` |

#### Returns

A function to remove the styles

() => `void`

#### Example

```js
const styles = `#element {
    color: red;
}`;

api.UI.addStyles(styles);
```

***

### alert()

> **alert**(`title`, `text?`): `Promise`\<`void`\>

Shows an alert message. Resolves once the message is dismissed.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `text` | `string` | `""` |

#### Returns

`Promise`\<`void`\>

#### Example

```js
api.UI.alert("Something happened", "This is an alert")
    .then(() => console.log("Alert dismissed"));
```

***

### confirm()

> **confirm**(`title`, `text?`): `Promise`\<`boolean`\>

Shows a prompt asking the user to confirm an action. Resolves to a boolean containing their choice.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `text` | `string` | `""` |

#### Returns

`Promise`\<`boolean`\>

#### Example

```js
api.UI.confirm("Are you sure?", "This cannot be undone")
    .then((confirmed) => console.log("Confirmation:", confirmed));
```

***

### forceReactUpdate()

> **forceReactUpdate**(): `void`

Forces Gimkit's react tree to fully rerender

#### Returns

`void`

***

### onComponentLoad()

> **onComponentLoad**\<`K`\>(`type`, `callback`): () => `void`

Waits for a component to load, and calls the callback with the component as an argument.
If the component has already loaded the callback will be fired immediately.
The available components are "notification", "message", and "modal".

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `"message"` \| `"notification"` \| `"modal"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `K` |
| `callback` | (`component`) => `void` |

#### Returns

A function that cancels waiting

() => `void`

#### Example

```js
api.UI.onComponentLoad("message", (message) => {
    message.success({ content: "This is a message!" });
});
```

***

### prompt()

> **prompt**(`title`, `options?`): `Promise`\<`string` \| `null`\>

Shows a prompt asking for user input. Resolves to null if cancelled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `options?` | `PromptOptions` |

#### Returns

`Promise`\<`string` \| `null`\>

#### Example

```js
api.UI.prompt("Name your character", {
    text: "This can be changed later",
    placeholder: "Character name",
    defaultVal: "Player"
}).then((name) => {
    if(name === null) console.log("User cancelled");
    else console.log("User entered:", name);
});
```

***

### showModal()

> **showModal**(`element`, `options?`): `void`

Shows a customizable modal to the user

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | `HTMLElement` \| `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> |
| `options` | \{ `buttons?`: readonly `ModalButton`[]; `className?`: `string`; `closeOnBackgroundClick?`: `boolean`; `id?`: `string`; `onClosed?`: () => `void`; `style?`: `string`; `title?`: `string`; \} |
| `options.buttons?` | readonly `ModalButton`[] |
| `options.className?` | `string` |
| `options.closeOnBackgroundClick?` | `boolean` |
| `options.id?` | `string` |
| `options.onClosed?` | () => `void` |
| `options.style?` | `string` |
| `options.title?` | `string` |

#### Returns

`void`

#### Example

```js
const element = document.createElement("div");
element.textContent = "Hello, world!";

api.UI.showModal(element, {
    id: "my-modal",
    title: "My Modal",
    style: "width: 300px;",
    className: "someClass",
    closeOnBackgroundClick: true,
    onClosed: () => {},
    buttons: [
        { text: "OK", style: "primary", onClick: () => {} },
        { text: "Cancel", style: "close" },
        { text: "Revert", style: "danger", onClick: () => {} }
    ]
});
```
