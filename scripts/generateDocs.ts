import { execSync } from "child_process";
import fs from 'fs';
import { join } from "path";

execSync('npx typedoc');

let dir = join('tmp', 'classes');
let pages = fs.readdirSync(dir);

pages = pages.filter(page => !page.toLowerCase().includes("parcel"));

// Remove Api at the end
for(let i = 0; i < pages.length; i++) {
    let page = pages[i];
    if(page === "Api.md") continue;
    let newPage = page.replace("Api", "");
    pages[i] = newPage;

    fs.renameSync(join(dir, page), join(dir, newPage));
}

const inheritedRegex = /\n#### Inherited from\n\n.*\n/g;

for(let page of pages) {
    let text = fs.readFileSync(join(dir, page)).toString();
    text = text.replace("PluginSettings", "[`Pluginsettings`](/api/settings)");

    // remove the constructor/extends message
    while(text.includes("\n## Extends") || text.includes("\n## Constructors")) {
        let start = text.indexOf("\n## ");
        let end = text.indexOf("\n## ", start + 4);
        text = text.slice(0, start) + text.slice(end);
    }

    // remove "inherited from"
    text = text.replaceAll(inheritedRegex, "");

    const linkRegex = /\]\(.+Api\.md\)/g;

    // fix links to renamed pages
    let match;
    while(match = linkRegex.exec(text)) {
        let index = match.index + 2;
        let end = text.indexOf("Api", index);
        text = text.slice(0, index) + '/api/' + text.slice(index, end).toLowerCase() + text.slice(end);
    }

    text = text.replaceAll("Api.md", "");

    fs.writeFileSync(join(dir, page), text);
}

// Split up Api into the scoped and unscoped version
let api = fs.readFileSync(join(dir, "Api.md")).toString();

// remove duplicated jsdoc comments
let lines = api.split("\n\n");
for(let i = 0; i < lines.length - 1; i++) {
    if(lines[i].startsWith("Gets") && lines[i] === lines[i + 1]) {
        lines.splice(i, 1);
        i--;
    }
}

let sections = lines.join("\n\n").split("\n## ");
let headers = [];
let parts = [];

for(let i = 0; i < sections.length; i++) {
    if(i != 0) sections[i] = "\n## " + sections[i];
    let start = sections[i].indexOf("###");
    headers.push(sections[i].slice(0, start));

    let sectionParts = sections[i].slice(start).split("\n***");
    parts.push(sectionParts);
}

let unscopedText = "";
let scopedText = "";
for(let i = 0; i < sections.length; i++) {
    unscopedText += headers[i];
    scopedText += headers[i];
    unscopedText += parts[i].filter(p => p.includes("`static`")).join("\n***");
    scopedText += parts[i].filter(p => !p.includes("`static`")).join("\n***");
}

fs.writeFileSync(join(dir, "Api.md"), unscopedText);
fs.writeFileSync(join(dir, "ScopedApi.md"), scopedText);
fs.writeFileSync(join(dir, "ScopedLibs.md"), fs.readFileSync(join(dir, "Libs.md")).toString());
fs.writeFileSync(join(dir, "ScopedPlugins.md"), fs.readFileSync(join(dir, "Plugins.md")).toString());

pages.push("ScopedApi.md");
pages.push("ScopedLibs.md");
pages.push("ScopedPlugins.md");

// Replace Class: with breadcrumbs
for(let page of pages) {
    let text = fs.readFileSync(join(dir, page)).toString();

    let title: string;
    if(page === "Api.md" || page === "ScopedApi.md") {
        text = text.slice(text.indexOf("\n") + 1);
        if(page === "Api.md") title = "Unscoped Api";
        else title = "Scoped Api";

        if(page === "Api.md") {
            text = "The api is accessible via the global variable `GL`. " +
            "Scripts are also encouraged to use the [scoped API](/api/scopedapi) which automatically handles cleanup. " +
            "The scoped api is available with the script-specific `api` variable.\n" + text;
        } else {
            text = "A scoped api is available to all scripts with the `api` variable.\n" + text;
        }
    } else {
        let name = page.toLowerCase().replace("scoped", "").replace(".md", "");
        if(page.startsWith("Scoped")) {
            text = `# [ScopedApi](/api/scopedapi).${name}` + 
                text.slice(text.indexOf("\n"));
        } else {
            text = `# [GL](/api/api).${name}` + 
                text.slice(text.indexOf("\n"));
        }

        title = page.replace(".md", "") + " Api";
        if(!title.includes("Scoped")) title = "Global " + title;
        else title = title.replace("Scoped", "");
    }

    let prevNone = page === "ScopedApi.md" ? "\nprev: false" : "";

    text = `---
title: ${title}
description: Documentation for the ${title}${prevNone}
---
${text}`;

    fs.writeFileSync(join("src", "content", "docs", "api", page.toLowerCase()), text);
}

fs.rmSync('tmp', { recursive: true });