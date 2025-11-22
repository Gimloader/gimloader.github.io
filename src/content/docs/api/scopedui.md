---
title: UI Api
description: Documentation for the UI Api
---
# [ScopedApi](/api/scopedapi).ui

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
