import type { APIRoute, MDXInstance } from "astro";

const pathToUrl = (path: string) => {
    const file = path.replaceAll("\\", "/").split('/').pop();
    if (!file) return null;

    return `https://gimloader.github.io/plugins/${file.replace('.mdx', '')}`;
}

export const GET: APIRoute = () => {
    const plugins: MDXInstance<Record<string, any>>[] =
        Object.values(import.meta.glob('../content/docs/plugins/**.mdx', { eager: true }));

    const value = plugins.map((page) => ({
        title: page.frontmatter.title,
        description: page.frontmatter.pluginDescription,
        author: page.frontmatter.author,
        downloadUrl: page.frontmatter.downloadUrl,
        webpage: pathToUrl(page.file)
    }));

    return Response.json(value);
}