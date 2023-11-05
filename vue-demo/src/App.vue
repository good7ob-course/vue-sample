<script setup lang="ts">
import { getGoodsList, getShopDetail } from "@/network/shop/shop";
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/demo-icon.jpeg" width="150" height="125" />

    <template>
      <div id="app">
        <button @click="getShopDetail">getGoodsList </button>
      </div>
    </template>
  

  </header>

</template>


