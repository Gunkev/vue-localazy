<script setup lang="ts">
import ProductCard from "./components/ProductCard.vue";

import product1 from "./assets/img/headphone1.jpg";
import product2 from "./assets/img/headphone2.jpg";
import product3 from "./assets/img/headphone3.jpeg";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
</script>

<template>
  <div class="page">
    <div class="language-bar">
      <LanguageSwitcher />
    </div>

    <div class="products">
      <ProductCard :image="product1" title="product1.title" description="product1.description" price="$49" />
      <ProductCard :image="product2" title="product2.title" description="product2.description" price="$79" />
      <ProductCard :image="product3" title="product3.title" description="product3.description" price="$99" />
    </div>
  </div>
</template>