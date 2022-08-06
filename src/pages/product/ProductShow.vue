<template>
  <div>
    <ProductBreadcrumbs></ProductBreadcrumbs>
    <h1 class="product-header"></h1>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const ProductBreadcrumbs = defineAsyncComponent(() =>
  import("../../components/product/ProductBreadcrumbs.vue")
);
</script>
