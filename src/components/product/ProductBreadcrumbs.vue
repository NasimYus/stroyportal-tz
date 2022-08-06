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
            {{ breadcrumb.count }}
          </span>
        </div>
        <img
          v-if="index !== breadcrumbs.length - 1"
          src="../../assets/img/icons/arrow-right.svg"
          class="breadcrumbs-list-item-arrow"
        />
      </li>
      <!--      <li class="breadcrumbs-list-item">-->
      <!--        <div clas>-->
      <!--          <span>Строительные материалы</span>-->
      <!--          <span>4 442 512</span>-->
      <!--        </div>-->
      <!--        <img src="../../assets/img/icons/arrow-right.svg" />-->
      <!--      </li>-->
      <!--      <li class="breadcrumbs-list-item">-->
      <!--        <div>-->
      <!--          <span>Сухие строительные смеси</span>-->
      <!--          <span>4 442 512</span>-->
      <!--        </div>-->
      <!--        <img src="../../assets/img/icons/arrow-right.svg" />-->
      <!--      </li>-->
      <!--      <li class="breadcrumbs-list-item">-->
      <!--        <div>-->
      <!--          <span>Шпатлевки</span>-->
      <!--          <span>4 442 512</span>-->
      <!--        </div>-->
      <!--        <img src="../../assets/img/icons/arrow-right.svg" />-->
      <!--      </li>-->
      <!--      <li class="breadcrumbs-list-item">-->
      <!--        <div>1</div>-->
      <!--        <div>2</div>-->
      <!--      </li>-->
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
<style scoped lang="scss">
.breadcrumbs-list {
  display: flex;
  justify-content: start;
  list-style-type: none;

  .breadcrumbs-list-item {
    display: flex;
    div {
      &:hover {
        color: #122ac7;
      }
      .breadcrumbs-list-item-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        display: block;
      }

      .breadcrumbs-list-item-count {
        @extend .breadcrumbs-list-item-text;
        color: #708598;
      }
    }

    .breadcrumbs-list-item-arrow {
      margin: 0 23px;
    }
  }
}
</style>
