---
title: UI Api
description: Documentation for the UI Api
---
# [ScopedApi](/api/scopedapi).ui

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

`Function`

A function to remove the styles

##### Returns

`void`

***

### showModal()

> **showModal**(`element`, `options`): `void`

Shows a customizable modal to the user

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | `HTMLElement` \| `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> |
| `options` | \{ `buttons`: `ModalButton`[]; `className`: `string`; `closeOnBackgroundClick`: `boolean`; `id`: `string`; `onClosed`: () => `void`; `style`: `string`; `title`: `string`; \} |
| `options.buttons`? | `ModalButton`[] |
| `options.className`? | `string` |
| `options.closeOnBackgroundClick`? | `boolean` |
| `options.id`? | `string` |
| `options.onClosed`? | () => `void` |
| `options.style`? | `string` |
| `options.title`? | `string` |

#### Returns

`void`
