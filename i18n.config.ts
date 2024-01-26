export const i18n = {
  defaultLocale: 'en',
  locales: ['mm','en', 'ch']
} as const

export type Locale = (typeof i18n)['locales'][number]
