---
title: Bundling Scripts
description: An explanation of how to use a bundler with Gimloader
---

Sometimes you are going to want to make larger scripts spanning multiple files, or you may want to use external dependencies from npm. In that case, you're going to want to bundle your script. Gimloader provides a preconfigured bundler at `@gimloader/build`. Even if you don't intend to use a bundler you can still get better intellisense by creating a node project and installing `@types/gimloader`.

## Quickstart
To get started, make sure you have [Node.js](https://nodejs.org/) installed and then run this command wherever you want to make your project.

```bash
npm create @gimloader
```

Then, fill out the questions asked and cd into the directory you provided. There are two types of setups available: workspace, and single script. A workspace contains multiple plugins/libraries, while a single script only contains one.

After creating a project, modify your `gimloader.config.js` file to your liking, and use `npx gimloader build` and `npx gimloader serve` to build the script. See the [Build Tools](https://github.com/Gimloader/build) for more information.