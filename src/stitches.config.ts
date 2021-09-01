import { createStitches } from '@stitches/astro'

export type { ComponentProps } from '@stitches/astro'

export const { createTheme, styled, globalCss, theme, Sheet } = createStitches({
	media: {
		sm: '(width < 640px)',
		md: '(640px <= width < 960px)',
		lg: '(960px <= width < 1280px)',
	}
})
