<script setup lang="ts">
import { ComingList } from '@/utils/index'
import type { theaterTypes } from '@/types/theater'
import { reactive, ref } from 'vue'
import router from '@/router'
const data = reactive({
  page: 1,
  per_page: 10
})

const ComLIst = ref<theaterTypes>([])

const loading = ref(false)
const finished = ref(false)
const total = ref()
const onLoad = async () => {
  // 异步更新数据

  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  const res = await ComingList(data)

  console.log(res)
  ComLIst.value = [...ComLIst.value, ...res.data]

  total.value = res.total

  // 数据全部加载完成
  if (ComLIst.value!.length >= total.value) {
    finished.value = true
  } else {
    data.page++
  }
  // 加载状态结束
  loading.value = false
}
const tomovies = (id: number) => {
  router.push('/movies?id=' + id)
}
</script>
<template>
  <div class="-page">
    <div class="top">
      <img @click="$router.back()" src="../assets//icon_9k77fcxlhlt//zuojt.svg" alt="" />
      <span>即将上映</span>
    </div>

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="main">
        <div class="movie-item" v-for="(item, index) in ComLIst" :key="index" @click="tomovies(item.id)">
          <!-- <div class="group-title">
            {{ item.release_date }}
          </div> -->
          <div class="poster-wrapper">
            <img :src="item.poster" alt="" />
          </div>
          <div class="movie-info">
            <div class="title">
              <div class="name">{{ item.title }}</div>
            </div>
            <div class="p">
              <span style="color: red; font-size;: 18px">{{ item.wish_count }}</span
              >人想看
            </div>
            <div class="p">{{ item.genres }}</div>
            <div class="p">{{ item.countries }}</div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<style lang="scss" scoped>
.top {
  width: 375px;
  height: 50px;
  background-color: #e54847;
  display: flex;
  align-items: center;
  color: #fff;
  img {
    width: 20px;
    margin-left: 10px;
  }
  span {
    margin-left: 30px;
    font-weight: 600;
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
