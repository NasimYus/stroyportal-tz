<template>
  <div class="breadcrumbs container">
    <ul class="breadcrumbs-list margin-y-sm">
      <li
        class="breadcrumbs-list-item"
        v-for="(breadcrumb, index) of breadcrumbs"
        :key="breadcrumb.id"
      >
        <div class="cursor-pointer">
          <span class="breadcrumbs-list-item-text">{{ breadcrumb.text }}</span>
          <span class="breadcrumbs-list-item-count">
            {{ breadcrumb.count ? breadcrumb.count : "" }}
          </span>
        </div>
        <img
          v-if="index !== breadcrumbs.length - 1"
          src="../../assets/img/icons/arrow-right.svg"
          class="breadcrumbs-list-item-arrow"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const breadcrumbs = ref([
  { id: 1, text: "Каталог", count: "4 442 512" },
  { id: 2, text: "Строительные материалы", count: "4 442 512" },
  { id: 3, text: "Сухие строительные смеси", count: "4 442 512" },
  { id: 4, text: "Шпатлевки", count: "4 442 512" },
  { id: 5, text: "Шпатлевка Knauf", count: "" },
]);
</script>
