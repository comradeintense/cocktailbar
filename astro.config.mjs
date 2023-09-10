import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	outDir: './dist',
	base: '/uidaily/seijaku',
	site: 'https://intenseui.dev',
	integrations: [tailwind()],
});
