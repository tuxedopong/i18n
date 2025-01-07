import { translations } from './translations'
import { LANGUAGE } from './languages'

export { LANGUAGE }

// The `id` is the English version. If you don't find a translated string,
// at least just return the English version.
export const getTranslation = (id: string, lang: LANGUAGE) => {
  const tMap = translations[id]
  if (!tMap) return id
  return tMap[lang] || id
}
