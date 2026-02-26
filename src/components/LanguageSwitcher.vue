<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
function changeLanguage(lang: string) {
    locale.value = lang
    localStorage.setItem("locale", lang)
}
</script>
<template>
    <div>
        <button @click="changeLanguage('en')">
            English
        </button>
        <button @click="changeLanguage('fr')">
            French
        </button>
        <button @click="changeLanguage('xxb')">
            Pseudo
        </button>
    </div>
</template>
