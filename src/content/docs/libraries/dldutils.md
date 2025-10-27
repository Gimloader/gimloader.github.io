---
title: DLDUtils
description: A Gimloader library that makes desync work better in Don't Look Down
---

DLDUtils is built on top of [Desync](/libraries/desync) to make Don't Look Down work better when desynchronized. It adds functionality for respawning at checkpoints when falling and when touching lasers.

## Usage

```js
/**
 * @needsLib DLDUtils | https://raw.githubusercontent.com/Gimloader/client-plugins/main/build/libraries/DLDUtils.js
 */

const DLDUtils = api.lib("DLDUtils");

// Set whether the player is respawned when touching a laser
DLDUtils.setLaserRespawnEnabled(true);

// Prevent respawning when warping somewhere
DLDUtils.cancelRespawn();
```