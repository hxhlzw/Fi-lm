<template>
  <div class="-page">
    <div class="a">
      <div class="a1" v-for="(item, index) in categories" :key="index">
        <span class="a1-text" :class="{ active: Tabindex == index }" @click="changeTab(item, index)">
          {{ item.name }}</span
        >
        <!-- <div class="b">
          <div class="b1" v-for="(ite, index) in item.children" :key="index">
            <span> {{ ite.name }}</span>
          </div>
        </div> -->
      </div>
    </div>
    <div class="b">
      <div class="b1" v-for="(item, index) in countries" :key="index">
        <span class="b1-text" :class="{ active: Tabindex1 == index }" @click="changeTab1(item.name, index)">
          {{ item.name }}</span
        >
      </div>
    </div>

    <div class="c">
      <div class="c1" v-for="(item, index) in years" :key="index">
        <span class="c1-text" :class="{ active: Tabindex2 == index }" @click="changeTab2(item, index)">
          {{ item.name }}</span
        >
      </div>
    </div>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="box">
        <div class="box1" v-for="(item, index) in moviesList" :key="index">
          <img :src="item.poster" alt="" />
          <p>{{ item.title }}</p>
          <span>{{ item.rating }}</span>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import type { moviesListType } from '@/types/moviesList'
import { getMovies, GetmoviesList } from '@/utils/index'
import { reactive, ref } from 'vue'

const categories = ref()
const countries = ref()
const years = ref()

const Tabindex = ref(0)
const Tabindex1 = ref(0)
const Tabindex2 = ref(0)

// 切换
const changeTab = (item: string, index: number) => {
  Tabindex.value = index

  const obj = reactive({
    actegory: item,
    page: '1',
    per_page: '21'
  })
  GetmoviesList(obj).then((res) => {
    console.log(res)
    moviesList.value = res.data
  })
}

const changeTab1 = (item: string, index: number) => {
  Tabindex1.value = index
  const obj1 = reactive({
    country: item,
    page: '1',
    per_page: '21'
  })

  GetmoviesList(obj1).then((res) => {
    console.log(res)
    moviesList.value = res.data
  })
}

const changeTab2 = (item: string, index: number) => {
  Tabindex2.value = index
  console.log(item)

  const obj2 = reactive({
    year: item,
    page: '1',
    per_page: '21'
  })
  GetmoviesList(obj2).then((res) => {
    console.log(res)
    moviesList.value = res.data
  })
}

// Tab 数据请求
getMovies({}).then((res) => {
  // console.log(res)
  categories.value = res.data.categories
  countries.value = res.data.countries
  years.value = res.data.years
})

// 影视列表参数

const moviesList = ref<moviesListType[]>([])
// 影视列表数据请求
const data = reactive({
  page: 1,
  per_page: '21'
})
const loading = ref(false)
const finished = ref(false)

const onLoad = async () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求

  let res = await GetmoviesList(data)
  console.log(res)
  moviesList.value = [...moviesList.value, ...res.data]

  // 数据全部加载完成
  if (moviesList.value.length >= 40) {
    finished.value = true
  } else {
    data.page++
  }
  // 加载状态结束
  loading.value = false
}
</script>

<style lang="scss" scoped>
.a {
  overflow-x: auto;
  width: 375px;
  display: flex;
  .a1 {
    display: inline-block;
    white-space: nowrap;
    margin-top: 20px;
    margin-left: 10px;
    .a1-text {
      display: block;
      text-align: center;

      width: 40px;
      height: 20px;
      margin-right: 15px;
      line-height: 20px;
      font-size: 12px;
      height: 20px;
    }
  }
}
.b {
  overflow-x: auto;
  width: 375px;
  display: flex;
  .b1 {
    display: inline-block;
    white-space: nowrap;
    margin-top: 20px;
    margin-left: 10px;
    .b1-text {
      display: block;
      text-align: center;
      min-width: 40px;
      height: 20px;
      margin-right: 15px;
      line-height: 20px;
      font-size: 12px;
      height: 20px;
    }
  }
}
.c {
  overflow-x: auto;
  width: 375px;
  display: flex;
  .c1 {
    display: inline-block;
    white-space: nowrap;
    margin-top: 20px;
    margin-left: 10px;
    .c1-text {
      display: block;
      text-align: center;
      min-width: 40px;
      height: 20px;
      margin-right: 15px;
      line-height: 20px;
      font-size: 12px;
      height: 20px;
    }
  }
}
.active {
  background-color: #e96362;
  border-radius: 20px 20px 20px 20px;
  color: #fff;
}
::-webkit-scrollbar {
  display: none;
}
.box {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 375px;
  margin-bottom: 50px;

  .box1 {
    position: relative;

    width: 30%;
    img {
      width: 100%;
      border-radius: 5px;
      height: 180px;
    }
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 0;
    }
    span {
      position: absolute;
      bottom: 44px;
      right: 7px;
      font-size: 15px;
      color: orange;
    }
  }
}
</style>
