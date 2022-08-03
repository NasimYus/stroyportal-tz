<template>
  <div class="container">
    <the-header></the-header>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TheHeader = defineAsyncComponent(() =>
  import("./components/core/TheHeader.vue")
);
</script>
