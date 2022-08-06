<template>
  <div>
    <ProductBreadcrumbs></ProductBreadcrumbs>
    <div class="content-start container">
      <h1 class="product-header-text margin-right-sm cursor-pointer">
        Штукатурка цементная цокольная Knauf Sockelpultz 25 кг
      </h1>
      <a class="items-center" href="#">
        <img src="../../assets/img/icons/share.svg" alt="share" />
      </a>
    </div>
    <product-info-navbar></product-info-navbar>
    <product-info></product-info>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const ProductBreadcrumbs = defineAsyncComponent(() =>
  import("../../components/product/ProductBreadcrumbs.vue")
);
const ProductInfoNavbar = defineAsyncComponent(() =>
  import("../../components/product/ProductInfoNavbar.vue")
);
const ProductInfo = defineAsyncComponent(() =>
  import("../../components/product/ProductInfo.vue")
);
</script>
