<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { locale, t } = useI18n()
function changeLanguage(lang: string) {
    locale.value = lang
    localStorage.setItem("locale", lang)
}
</script>
<template>
    <div>
        <button @click="changeLanguage('en')">
            {{ t("language.english") }}
        </button>
        <button @click="changeLanguage('fr')">
            {{ t("language.french") }}
        </button>
        <button @click="changeLanguage('de')">
            {{ t("language.german") }}
        </button>
    </div>
</template>
