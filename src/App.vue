<template>
  <div>
    <the-header class="container"></the-header>
    <the-navbar></the-navbar>
    <product-show></product-show>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TheHeader = defineAsyncComponent(() =>
  import("./components/core/TheHeader.vue")
);
const TheNavbar = defineAsyncComponent(() =>
  import("./components/core/navbar/TheNavbar.vue")
);
const ProductShow = defineAsyncComponent(() =>
  import("./pages/product/ProductShow.vue")
);
</script>
