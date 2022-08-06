<template>
  <div class="container product-info">
    <section>
      <div class="product-info-main-image">
        <div class="content-between">
          <span class="product-image-top">ХИТ ПРОДАЖ</span>
          <button class="product-image-add-to-stock">В список</button>
        </div>
        <span class="product-image-event">АКЦИЯ</span>
        <div class="product-image">
          <img src="../../assets/img/product.svg" alt="product" />
        </div>
        <span class="product-image-text">
          Наведите на изображение, чтобы увеличить его
        </span>
      </div>
      <div class="product-all-images">
        <a class="cursor-pointer">
          <img src="../../assets/img/icons/arrow-left.svg" />
        </a>
        <img
          src="../../assets/img/product2.svg"
          alt="product"
          class="cursor-pointer"
        />
        <img
          src="../../assets/img/product3.svg"
          alt="product"
          class="cursor-pointer"
        />
        <img
          class="product-all-images-last cursor-pointer"
          src="../../assets/img/product4.svg"
          alt="product"
        />
        <a class="cursor-pointer">
          <img src="../../assets/img/icons/chevron-right-product.svg" />
        </a>
      </div>
    </section>
    <section class="product-main-info">
      <div class="product-main-info-item">
        <img src="../../assets/img/icons/file-text.svg" />
        <div class="product-info-block">
          <p>Коротко о товаре</p>
          <ul>
            <li>
              <span>Вес</span> &middot;
              <span>25-50 кг</span>
            </li>
            <li>
              <span>Основа</span> &middot;
              <span>Гипсовая супер штукатурка Knauf...</span>
            </li>
          </ul>
          <a href="#">Все характеристики</a>
        </div>
      </div>
      <div class="product-main-info-item">
        <img src="../../assets/img/icons/thumbs-up.svg" />
        <div>
          <p>Пользуется спросом</p>
          <div>
            <span class="margin-right-sm border-bottom-dashed">
              2 274 просмотров
            </span>
            <span>602 заказа</span>
          </div>
        </div>
      </div>
      <div class="product-main-info-last-item">
        <img src="../../assets/img/icons/check-circle.svg" />
        <div class="">
          <p>В наличии в москвве на 4 марта 2020</p>
          <a href="#">140 предложений</a>
          <img src="../../assets/img/partner.svg" />
        </div>
      </div>
    </section>
    <section>
      <product-popular-card></product-popular-card>
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const ProductPopularCard = defineAsyncComponent(() =>
  import("../../components/product/ProductPopularCard")
);
</script>
