import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				...topicSchema.shape,
				...z.object({
					banner: z.object({ content: z.string() }).default({
						content: "Gimloader is currently broken due to a Gimkit update. A fix is in the works, but it may take a while.",
					})
				}).shape
			})
		})
	}),
};