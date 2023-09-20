<template>
  <div class="page">
    <div class="top">
      <img @click="$router.back()" src="../assets//icon_9k77fcxlhlt//zuojt.svg" alt="" />
      <span>电影</span>
    </div>

    <div class="main">
      <div class="movie-item">
        <div class="poster-wrapper">
          <img :src="MovList?.poster" alt="" />
        </div>
        <div class="movie-info">
          <div class="title">
            <div class="name">{{ MovList?.title }}</div>
            <div class="pf">
              <span>{{ MovList?.rating }}</span
              ><small>分</small>
            </div>
          </div>
          <div class="p">{{ MovList?.year }}</div>
          <div class="p">{{ MovList?.genres }}</div>
          <div class="p">{{ MovList?.countries }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { moviesList } from '@/utils/index'
import type { MoviesType } from '@/types/movies'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
console.log(route.query.id)
const MovList = ref<MoviesType>()
moviesList({}).then((res) => {
  console.log(res)
  MovList.value = res.data
})
</script>

<style lang="scss" scoped>
.top {
  width: 375px;
  height: 50px;
  background-color: #6b6a68;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  img {
    width: 20px;
    margin-left: -162px;
  }
  span {
    margin-left: 130px;
  }
}

.main {
  padding: 0 10px;
  .movie-item {
    width: 375px;
    display: flex;
    padding-top: 10px;
    height: 130px;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
    .poster-wrapper {
      width: 26%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .movie-info {
      width: 70%;
      padding-left: 10px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 40px;
      }
      .pf {
        color: #f16c00;
        span {
          font-weight: 600;
        }
      }
      .p {
        margin: 13px 0;
        color: #999;
        font-size: 13px;
      }
    }
  }
}
</style>
