<template>
  <div class="wrapper">
    <div class="container" v-if="token">
      <div class="user-info">
        <img class="cent" :src="UserList?.avatar" alt="" />
        <span>{{ UserList?.username }}</span>
      </div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-count">{{ UserList?.status }}</div>
          <div class="menu-name">关注影人</div>
        </div>
        <div class="menu-item">
          <div class="menu-count">{{ UserList?.status }}</div>
          <div class="menu-name">关注角色</div>
        </div>
        <div class="menu-item">
          <div class="menu-count">{{ UserList?.status }}</div>
          <div class="menu-name">收藏影评</div>
        </div>
        <div class="menu-item">
          <div class="menu-count">{{ UserList?.status }}</div>
          <div class="menu-name">收藏视频</div>
        </div>
      </div>
      <div class="centarr">
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/yijian.svg" alt="" />
              <span class="custom-title">我的资料</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/yijian.svg" alt="" />
              <span class="custom-title">影视收藏夹</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
      </div>
      <div class="cell">
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/yijian.svg" alt="" />
              <span class="custom-title">意见反馈</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/nan.svg" alt="" />
              <span class="custom-title">关于作者</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/i.svg" alt="" />
              <span class="custom-title">关于项目</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/bj.svg" alt="" />
              <span class="custom-title">更新日志</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/shezhi.svg" alt="" />
              <span class="custom-title" @click="showRight = true">设置</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
      </div>
    </div>
    <div class="container" v-else>
      <div class="user-info">
        <img class="cent" src="https://test-h5.ixook.com/img/logo.3572ff19.png" alt="" />
        <span @click="$router.push('/login')">立即登录</span>
      </div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-count">-</div>
          <div class="menu-name">关注影人</div>
        </div>
        <div class="menu-item">
          <div class="menu-count">-</div>
          <div class="menu-name">关注角色</div>
        </div>
        <div class="menu-item">
          <div class="menu-count">-</div>
          <div class="menu-name">收藏影评</div>
        </div>
        <div class="menu-item">
          <div class="menu-count">-</div>
          <div class="menu-name">收藏视频</div>
        </div>
      </div>
      <div class="cellb">
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/yijian.svg" alt="" />
              <span class="custom-title">意见反馈</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/nan.svg" alt="" />
              <span class="custom-title">关于作者</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/i.svg" alt="" />
              <span class="custom-title">关于项目</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/bj.svg" alt="" />
              <span class="custom-title">更新日志</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="cll">
              <img class="cell-img" src="../assets/icon_9k77fcxlhlt/shezhi.svg" alt="" />
              <span class="custom-title">设置</span>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" />
          </template>
        </van-cell>
      </div>
    </div>

    <!-- 右侧弹出 -->
    <van-popup v-model:show="showRight" position="right" :style="{ width: '100%', height: '100%' }">
      <div class="top">
        <img @click="showRight = false" src="../assets//icon_9k77fcxlhlt//zuojt.svg" alt="" />
        <span>设置</span>
      </div>
      <van-cell-group>
        <van-cell title="应用名称" value="慕影网" />
        <van-cell title="开发着" value="冰糖雪梨" />
        <van-cell title="版本" value="0.1 alpha" />
      </van-cell-group>
      <div class="buttom">
        <van-button type="primary" color="#f56c6c" block @click="tui">退出登录</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { getUser, UserRomve } from '@/utils/index'
import { ref } from 'vue'
const showRight = ref(false)
const UserList = ref()
getUser({}).then((res) => {
  console.log(res)
  UserList.value = res.data
})
const token = localStorage.getItem('token')
const tui = () => {
  UserRomve({}).then(() => {
    localStorage.removeItem('token')
    showRight.value = false
  })
}
</script>

<style lang="scss" scoped>
.buttom {
  position: fixed;
  bottom: 20px;
  width: 95%;
  left: 5px;
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
.container {
  padding-left: 10px;
  position: relative;
  width: 375px;
  height: 185px;
  background-color: #e54847;

  .user-info {
    display: flex;
    line-height: 185px;
    align-items: center;

    .cent {
      background-color: #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    span {
      color: #fff;
      font-size: 16px;
      margin-left: 10px;
    }
  }
}

.cellb {
  width: 350px;
  height: 225px;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #ccc;
  margin-top: -25px;
}

.cell {
  width: 350px;
  height: 225px;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #ccc;
  margin-top: 14px;
}

.centarr {
  width: 350px;
  height: 93px;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #ccc;
  margin-top: -30px;
}

.menu-list {
  width: 331px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 8px 0 #ccc;
  border-radius: 5px;
  top: -40px;
  padding: 0 10px;

  .menu-count {
    text-align: center;
    color: red;
  }

  .menu-name {
    font-size: 14px;
    font-weight: 600;
    color: #666;
  }
}

.cll {
  display: flex;
  align-items: center;
}

.cell-img {
  width: 20px;
  color: rgb(255, 190, 16);
}

.custom-title {
  margin-left: 10px;
}
</style>
