<template>
  <div class="product-popular-card">
    <div class="product-popular-header">
      <img
        class="margin-right-xs"
        src="../../assets/img/icons/star.svg"
        alt="star"
      />
      <h2>Популярное предложение</h2>
    </div>
    <div class="product-popular-price">39 900 <span>РУБ/ШТ</span></div>
    <span class="product-popular-in-stock">В НАЛИЧИИ</span>
    <a class="product-popular-button">Перейти в магазин</a>
    <div class="product-popular-footer">
      <img src="../../assets/img/icons/secure.svg" alt="secure" />
      <div>
        <span class="margin-bottom-xs">ПРОВЕРЕННЫЙ ПОСТАВЩИК</span>
        <p class="margin-bottom-xs">ООО ВсеИнструменты.ру</p>
        <span>ДИЛЕР</span>
      </div>
      <img src="../../assets/img/brand.svg" alt="brand" />
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.product-popular-card {
  padding: 24px;
  width: 350px;
  height: 341px;
  background: #ffffff;
  border: 1px solid #eceff1;
  border-top: 4px solid #fed83d;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  border-radius: 4px;

  .product-popular-in-stock {
    color: #05b169;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 32px;
    display: inline-block;
  }

  .product-popular-header {
    display: flex;
    justify-content: start;
    margin-bottom: 32px;
  }

  .product-popular-price {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #050f19;

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    }
  }

  .product-popular-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    background: #fed83d;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #0a0a0a;
    margin-bottom: 32px;
    cursor: pointer;
  }

  .product-popular-footer {
    display: flex;
    justify-content: space-between;
    align-items: start;

    div {
      display: flex;
      flex-direction: column;

      p {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #0a0a0a;
      }

      :last-child {
        width: 60px;
        height: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 12px;
        background: #e5fff0;
        border-radius: 2px;
        font-weight: 600;
        font-size: 10px;
        line-height: 10px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #05b169;
        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }
  }
}
</style>
