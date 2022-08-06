<template>
  <div class="navbar">
    <nav class="container navbar-nav content-between">
      <div class="items-center">
        <div class="margin-right-md">
          <a href="#">
            <img src="../../../assets/img/icons/logo.svg" alt="лого" />
          </a>
        </div>
        <a href="#" class="margin-right-md navbar-catalog-button">
          <div class="margin-right-xs">
            <div class="navbar-list-icon-fist"></div>
            <div class="navbar-list-icon-second"></div>
            <div class="navbar-list-icon-third"></div>
          </div>
          <span class="navbar-catalog-button-text">Каталог</span>
        </a>
        <div>
          <input
            type="text"
            class="navbar-input"
            placeholder="Строительные смеси"
          />
        </div>
      </div>
      <div class="navbar-nav-item items-center">
        <button class="margin-right-md navbar-list-button">
          <img
            src="../../../assets/img/icons/list.svg"
            alt="список"
            class="margin-right-xs"
          />
          <span class="navbar-list-button-text">Список</span>
        </button>
        <a class="navbar-profile-button"><span>A</span></a>
      </div>
    </nav>
  </div>
</template>
<script setup></script>
