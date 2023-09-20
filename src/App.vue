<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <van-tabbar route active-color="#ee0a24" v-if="$route.meta.tabbar">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/classly" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="play-circle-o">短片</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
  <router-view />
</template>

<style scoped></style>
