<template>
  <nav class="product-navbar container">
    <a class="product-navbar-button-left">
      <img src="../../assets/img/icons/arrow-left.svg" />
    </a>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <a class="product-info-item" href="#">{{ item.title }}</a>
      </li>
    </ul>
    <a class="product-navbar-button-right">
      <img src="../../assets/img/icons/chevron-right.svg" />
    </a>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  { id: 1, title: "Где купить" },
  { id: 2, title: "Описание" },
  { id: 3, title: "Характеристики" },
  { id: 4, title: "Динамика цен" },
  { id: 5, title: "Календарь низких цен" },
  { id: 6, title: "Сравнение" },
]);
</script>
