<template>
  <div>
    <ProductBreadcrumbs></ProductBreadcrumbs>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const ProductBreadcrumbs = defineAsyncComponent(() =>
  import("../../components/product/ProductBreadcrumbs.vue")
);
</script>
