<script setup lang="ts">
import { getGoodsList, getShopDetail } from "@/network/shop/shop";
import { create } from "domain";
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'

const list = [
  {
    name :  "商店1",
    id :1
  },
  {
    name : "商店2",
    id :2
  },
]

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/demo-icon.jpeg" width="150" height="125" />

      <div id="app">
        <button v-for="data in list" @click="getShopDetail(data.id)">getGoodsList </button>
      </div>
  
  </header>

</template>


