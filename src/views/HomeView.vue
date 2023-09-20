<template>
  <div class="box">
    <!-- 头部 -->
    <div class="home-page">
      <div class="page-search">
        <van-icon name="search" />
        <span>请输入你要搜索的内容</span>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiper" :key="index">
          <img class="swipe-img" :src="item.banner" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 中间分类 -->
    <div class="home-cent">
      <div class="cent-li">
        <img style="width: 30px; height: 30px" src="../assets//icon_9k77fcxlhlt//bofang.svg" alt="" />
        <p>热映中</p>
      </div>
      <div class="cent-li">
        <img style="width: 30px; height: 30px" src="../assets//icon_9k77fcxlhlt//renwupaihang.svg" alt="" />
        <p>热映中</p>
      </div>
      <div class="cent-li">
        <img style="width: 30px; height: 30px" src="../assets/icon_9k77fcxlhlt//jiangbei.svg" alt="" />
        <p>热映中</p>
      </div>
      <div class="cent-li">
        <img style="width: 30px; height: 30px" src="../assets//icon_9k77fcxlhlt//icon--date.svg" alt="" />
        <p>热映中</p>
      </div>
    </div>

    <!-- 热映列表 -->
    <div class="home-list">
      <div class="list-head">
        <div class="head">
          <span class="act"></span>
          <span>正在热映</span>
        </div>
        <div class="head-size" @click="$router.push('/theater')">19部 &gt;</div>
      </div>
      <div class="list-page">
        <div class="page" v-for="(item, index) in theater" :key="index">
          <img :src="item.poster" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>

    <!-- 上映列表 -->
    <div class="home-list">
      <div class="list-head">
        <div class="head">
          <span class="act"></span>
          <span>即将上映</span>
        </div>
        <div class="head-size" @click="$router.push('/coming')">35部 &gt;</div>
      </div>
      <div class="list-page">
        <div class="page" v-for="(item, index) in coming" :key="index">
          <img :src="item.poster" alt="" />
          <p>{{ item.title }}</p>
          <span>{{ item.release_date }}</span>
        </div>
      </div>
    </div>

    <!-- 那年今日 -->
    <div class="home-list">
      <div class="list-head">
        <div class="head">
          <span class="act"></span>
          <span>那年今日</span>
        </div>
        <div class="head-size" @click="$router.push('/today')">304部 &gt;</div>
      </div>
      <div class="list-page">
        <div class="page" v-for="(item, index) in today" :key="index">
          <img :src="item.poster" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>

    <!-- 文章资讯 -->
    <div class="home-list">
      <div class="list-head">
        <div class="head">
          <span class="act"></span>
          <span>文章资讯</span>
        </div>
      </div>
      <div class="list-i">
        <div class="page">
          <div class="h3">
            {{ article?.title }}
          </div>
          <div class="page-text">
            <img style="width: 25px; height: 25px; margin-top: -5px" :src="article?.author?.avatar" alt="" />
            <span>{{ article?.author?.username }}</span>
          </div>
          <van-text-ellipsis rows="2" :content="article?.brief" />
          <div class="page-buttom">
            <div>
              <span>{{ article?.like_count }}点赞 · {{ article?.read_count }}浏览</span>
            </div>
            <div class="pag-rig">{{ article?.user_id }}年前</div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-info">
      <img src="https://test-h5.ixook.com/img/logo.3572ff19.png" alt="" />
      <span>慕影网</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HomeList } from '@/utils/index'

const swiper = ref()
const theater = ref()
const coming = ref()
const today = ref()
const article = ref()
// 请求
HomeList({}).then((res) => {
  console.log(res)
  swiper.value = res.data.swiper
  theater.value = res.data.theater.data
  coming.value = res.data.coming.data
  today.value = res.data.today.data
  article.value = res.data.article.data[0]
})
</script>

<style lang="scss" scoped>
.box {
  height: calc(100% - 100px);
  background-color: #f5f5f5;
  padding-bottom: 100px;
}
.home-page {
  overflow: hidden;
  background-color: #9b392f;
  .page-search {
    margin-top: 10px;
    margin-left: 10px;
    width: 95%;
    height: 35px;
    border-radius: 20px;
    background-color: #ecdbd9;
    display: flex;
    align-items: center;

    .van-icon {
      margin-left: 10px;
      margin-right: 10px;
      color: #7c7979;
    }

    span {
      font-size: 15px;
      color: #7c7979;
    }
  }
}
.my-swipe {
  margin: 10px;
}
.swipe-img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}
.home-cent {
  border-radius: 10px;
  margin: 10px;
  background-color: #fff;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  text-align: center;
  .cent-li {
    margin-top: 10px;
    width: 25%;

    p {
      margin-top: 2px;
    }
  }
}
.home-list {
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
  height: 220px;
  .list-head {
    color: #666;
    padding-right: 6px;
    height: 40px;
    line-height: 40px;
    padding-left: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head {
      padding-left: 6px;
      display: flex;
      align-items: center;
    }
    .head-size {
      font-size: 14px;
    }
  }
}
.act {
  width: 3px;
  height: 16px;
  display: block;
  border-radius: 2px;
  background-color: red;
  margin-right: 4px;
}
.list-page {
  padding-left: 10px;
  display: flex;
  overflow-x: auto;
  .page {
    white-space: nowrap;
    display: inline-block;
    flex-shrink: 0;
    margin-right: 10px;
    img {
      width: 100px;
      height: 130px;
      border-radius: 5px;
    }

    p {
      margin-top: -2px;
    }
    span {
      margin-top: -10px;
      display: block;
      font-size: 14px;
      color: #666;
    }
  }
}
.h3 {
  font-weight: 600;
  margin-top: 10px;
}
.page-text {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.list-i {
  padding-left: 9px;
}
.page-buttom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: #303133;
  font-size: 14px;
  .pag-rig {
    padding-right: 10px;
  }
}
.home-info {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #ccc;
  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    filter: grayscale(100%);
    opacity: 0.5;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
