
import { createI18n } from "vue-i18n"
import en from "./assets/locales/en.json"
import fr from "./assets/locales/fr.json"
import de from "./assets/locales/de.json"

const savedLocale = localStorage.getItem("locale") || "en"

export const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: "en",
  messages: {
    en,
    fr,
    de
  }
})