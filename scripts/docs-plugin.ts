import { MarkdownPageEvent, type MarkdownApplication } from "typedoc-plugin-markdown";
import { join, basename } from "node:path";
import { Converter, ReflectionKind } from "typedoc";
import { readFileSync } from "node:fs";

const inheritedRegex = /\n#### Inherited from\n\n.*\n/g;
const constructorRegex = /\n## Constructors[\S\s]+?\n#### Returns\n\n.+\n/g;
const extendsRegex = /\n## Extends\n\n-.+\n/g;
const overridesRegex = /\n#### Overrides\n\n.+\n/g;
const onExtendsRegex = /\*extends\* `"send:.+ \|/g;
const sendArgsRegex = /\.\.\.`args` \| `SentMessages.+ \|/g;
const linkRegex = /\((\/api\/.+)\.md\)/g;
const classRegex = /^# Class: .+\n/g;
const propertyRegex = /\n> \*\*(.+)\*\*: `.+`\n/g;

export function load(app: MarkdownApplication) {
    app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
        const classes = context.project.getReflectionsByKind(ReflectionKind.Class);
        for(const reflection of classes) {
            if(reflection.name !== "Api") reflection.name = reflection.name.replace("Api", "");
            if(reflection.name !== "UI") reflection.name = reflection.name.toLowerCase();
        }

        const types = context.project.getReflectionsByKind(ReflectionKind.TypeAlias);
        for(const type of types) {
            if(type.name !== "PluginSettings") return;
            type.name = "settings";
        }
    });

    app.renderer.on(MarkdownPageEvent.END, (page) => {
        const filename = basename(page.filename).replace(".md", "");
        if(filename === "settings") {
            const settingsContent = readFileSync(join("scripts", "data", "settings.md"), "utf-8");
            page.contents = settingsContent;
            return;
        }
        
        const isClass = page.contents.startsWith("# Class: ");
        const isRootApi = filename === "api";

        // Pretty some things up
        page.contents = page.contents.replace(inheritedRegex, "");
        page.contents = page.contents.replace(constructorRegex, "");
        page.contents = page.contents.replace(extendsRegex, "");
        page.contents = page.contents.replace(overridesRegex, "");
        page.contents = page.contents.replace(linkRegex, "($1)");
        
        if(isRootApi) {
            page.contents = page.contents.replace(classRegex, `# Script Api\n`);
        } else if(filename === "blueboat" || filename === "colyseus") {
            const messageType = filename === "blueboat" ? "Messages1d" : "Messages2d";
            page.contents = page.contents.replace(classRegex, `# [api](/api/api).[net](/api/net).${filename}\n`);
            page.contents = page.contents.replace(onExtendsRegex, `*extends* keyof \`${messageType}\` |`)
            page.contents = page.contents.replace(sendArgsRegex, "`data` | `any` |");
        } else {
            page.contents = page.contents.replace(classRegex, `# [api](/api/api).${filename}\n`);
        }

        if(isRootApi) {
            page.contents = page.contents.replace("\nGets the exported values of a library\n", "");
            page.contents = page.contents.replace("\nGets the exported values of a plugin, if it has been enabled\n", "");
            page.contents = page.contents.replace(" = `Svelte`", "");
        } else if(filename === "SvelteComponents") {
            page.contents = page.contents.replace(propertyRegex, (_, name) => {
                const link = `https://shadcn-svelte.com/docs/components/${camelToKebabCase(name)}`;
                return `\n> **${name}**: [\`${name}\`](${link})\n`;
            });
        }

        // Add a header
        const title = (isRootApi ? "Script" : capitalize(filename)) + (isClass ? " Api" : " Type");
        const description = `Documentation for Gimloader's ${title}`;
        
        let header = `---\ntitle: ${title}\ndescription: ${description}\n`;
        if(!isClass) header += "topic: development\nsidebar:\n  hidden: true\n";
        header += "---\n\n";

        page.contents = header + page.contents;
    });
}

function camelToKebabCase(str: string) {
    // https://stackoverflow.com/a/67243723
    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, ofs) => (ofs ? "-" : "") + match.toLowerCase());
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}