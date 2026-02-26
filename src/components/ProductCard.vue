<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps<{
  image: string;
  title: string;
  description: string;
  price: string;
}>();

const count = ref(0);

function addToCart() {
  count.value++;
}
</script>

<template>
  <div class="product">
    <img :src="image" class="product-image" />
    <h2>{{ t(title) }}</h2>
    <p>{{ t(description) }}</p>
    <p>
      {{ t("product.priceLabel", { amount: price }) }}
    </p>
    <button @click="addToCart">
      {{ t("cart.add") }}
    </button>
    <p>
      {{ t("cart.items", count) }}
    </p>
  </div>
</template>
