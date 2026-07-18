import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#0F172A',
          accent:  '#2563EB',
          success: '#16A34A',
          warning: '#F59E0B',
          danger:  '#DC2626',
          bg:      '#FFFFFF',
          night:   '#020617',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      typography: (theme: (arg: string) => string) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':         theme('colors.slate.700'),
            '--tw-prose-headings':     theme('colors.slate.900'),
            '--tw-prose-code':         theme('colors.blue.700'),
            '--tw-prose-pre-bg':       theme('colors.slate.950'),
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body':         theme('colors.slate.300'),
            '--tw-prose-headings':     theme('colors.white'),
            '--tw-prose-code':         theme('colors.blue.300'),
          },
        },
      }),
    },
  },
  plugins: [typography],
}
export default config
