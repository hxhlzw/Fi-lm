<script setup lang="ts">
import { todayList } from '@/utils/index'
import type { theaterTypes } from '@/types/theater'
import { reactive, ref } from 'vue'
import router from '../router/index'
const data = reactive({
  page: 1,
  per_page: 20
})

const ComLIst = ref<theaterTypes>([])

const loading = ref(false)
const finished = ref(false)
const total = ref()
const onLoad = () => {
  // 异步更新数据

  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  todayList(data).then((res) => {
    data.page++

    console.log(res)
    ComLIst.value = [...ComLIst.value, ...res.data]

    total.value = res.total
    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (ComLIst.value!.length >= total.value) {
      finished.value = true
    }
  })
}
const sortby = ref('hot')
const typeChangeHandle = (name: any) => {
  sortby.value = name
  data.page = 2
  if (name == 'date') {
    ComLIst.value = ComLIst.value.sort((a, b) => {
      return b.year - a.year
    })
  } else {
    ComLIst.value = ComLIst.value.sort((a: any, b: any) => {
      return b.rating - a.rating
    })
  }

  onLoad()
}

const tomovies = (id: number) => {
  router.push('/movies?id=' + id)
}
</script>
<template>
  <div class="-page">
    <div class="top">
      <img @click="$router.back()" src="../assets//icon_9k77fcxlhlt//zuojt.svg" alt="" />
      <span>那年今日</span>
    </div>
    <div class="menu-wrapper">
      <div class="menu" :class="{ 'is-active': sortby === 'hot' }" @click="typeChangeHandle('hot')">热度排序</div>
      <div class="menu" :class="{ 'is-active': sortby === 'date' }" @click="typeChangeHandle('date')">时间排序</div>
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
              <div class="pf">
                <span>{{ item.rating }}</span
                ><small>分</small>
              </div>
            </div>
            <div class="p">
              <span style=" font-size;: 18px">{{ item.year }}</span>
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
.menu-wrapper {
  z-index: 999;
  position: absolute;
  left: 0;
  top: 40px;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
  border-bottom: 1px solid #eee;
  .menu {
    flex: 1;
    text-align: center;
    &.is-active {
      color: red;
    }
  }
}
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
  margin-top: 30px;

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
        padding-right: 18px;
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
