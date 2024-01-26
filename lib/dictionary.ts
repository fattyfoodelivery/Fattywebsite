import type { Locale } from '@/i18n.config'

const dictionaries = {
  mm: () => import('@/dictionaries/mm.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ch: () => import('@/dictionaries/ch.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()