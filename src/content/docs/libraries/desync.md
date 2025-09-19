---
title: Desync
description: A Gimloader library that allows plugins to move the player freely
prev: false
---

Desync is utility library that stops synchronizing the player's position with the server, allowing plugins to move the player freely. Other players cannot see this movement, and proximity-based devices such as buttons will not work for the player. If you intend on using this library you should make these side effects clear to the user.

## Usage

```js
/**
 * @needsLib Desync | https://raw.githubusercontent.com/Gimloader/client-plugins/main/libraries/Desync.js
 */

// Stop the player from being moved by the server
api.lib("Desync").enable();
```