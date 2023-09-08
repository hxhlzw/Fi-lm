<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <van-tabbar route active-color="#ee0a24">
    <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/classly" icon="apps-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="play-circle-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="manager-o">标签</van-tabbar-item>
  </van-tabbar>
  <router-view />
</template>

<style scoped>
</style>
