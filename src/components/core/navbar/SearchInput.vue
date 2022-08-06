<template>
  <div>
    <input
      @blur="search_text = ''"
      v-model="search_text"
      type="text"
      class="navbar-input"
      placeholder="Строительные смеси"
    />
    <div v-if="search_text" class="data-list">
      <div v-if="loading" class="padding-xs">загрузка...</div>
      <div v-else>
        <ul v-if="products.length">
          <li
            v-for="product in products"
            :key="product"
            class="padding-xs cursor-pointer"
          >
            {{ product }}
          </li>
        </ul>
        <div class="padding-xs" v-else>Нет данных</div>
      </div>
    </div>
    <div :class="{ background: search_text }"></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const search_text = ref("");
const products = ref([]);
const loading = ref(false);

watch(search_text, (text) => {
  getProducts(text);
});

async function getProducts(text) {
  loading.value = true;
  const response = await fetch(
    `http://localhost:5000/search?search_text=${text}`
  );
  products.value = await response.json();
  loading.value = false;
}
</script>
