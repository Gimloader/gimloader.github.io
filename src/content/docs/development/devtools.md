---
title: Devtools
description: An explanation of how to use devtools
---

## Devtools

The most important tool for developing Gimloader plugins is your browser's devtools. A chromium-based browser such as Chrome or Edge is recommended due to the devtools being better. You can open devtools with Ctrl+Shift+I or f12. After doing so, there are many tabs with a lot of features, not all of which are relevant. The following are the most important:
* The elements tab - Shows the DOM
  * Press the box with arrow button at the top left then click an element on the page to view it in the elements tab
* The console tab - Shows logs and allows you to run code to test things
  * If you right click on a function and press "Show function definition" you can view its code
* The sources tab - Shows Gimkit's code and allows you to use the debugger
* The network tab - Shows a log of network traffic
  * Clicking on a request and going to "Initiatior" shows what triggered the request
* The search tab - Search for things throughout all of Gimkit's code
  * Can be opened with Ctrl+Shift+F

When looking through Gimkit's code you will generally be in the sources tab, which automatically pretty-prints the code. This means that newlines and indentation are added to make it more readable. However, the code is still minified internally, which is important because the search tab and Gimloader's [rewriter api](/api/rewriter) both still use the minified version of the code.

## The Debugger

In the sources tab, you can add breakpoints by clicking on the blue lines to the left of the code. Breakpoints will trigger when the code they come before is executed. When a breakpoint is triggered, the entire page will pause and you can use the debugger. This allows you to step forwards in the code by pressing the buttons at the top right, and allows you to see the value of variables by hovering over them. You can also view the call stack on the bottom right, which shows what the code is being run by.

## React Devtools

If you want to modify Gimkit's UI, as explained in the [react](/development/react) tutorial, the [React Devtools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) extension is extremely helpful. This adds a new `components` tab to devtools, which shows a tree of all the React components on the page. Like with the elements tab, there is a button at the top left which lets you select an element on the page and see it in the tree.

After selecting a component, you can click the angled brackets button on the top right to view the source code for the component. If the code does not immediately look like the correct component, it's likely that you are looking at some kind of wrapper, which can often be resolved by instead looking at a component up or down the tree.