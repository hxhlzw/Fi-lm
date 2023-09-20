<template>
  <div class="box-page">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="video-item" v-for="video in list" :video="video" :key="video.id">
        <!-- 视频信息 -->
        <div class="video-content" :class="{ 'is-play': video.isPlaying }">
          <div class="video-title">{{ video.title }}</div>

          <img class="video-poster" :src="video.poster" />

          <div class="video-play">
            <img class="icon-play" src="../assets//icon_9k77fcxlhlt/play.svg" alt="" />
          </div>

          <div class="video-info">
            <div class="video-plays">{{ video.play_count }} 次播放</div>
            <div class="video-duration">{{ new Date(video.duration).toLocaleString() }}</div>
          </div>
        </div>

        <!-- 作者与评论 -->
        <div class="video-bottom">
          <div class="video-author">
            <img class="author-avatar" :src="video.author.avatar" />
            <div class="author-name">{{ video.author.username }}</div>
          </div>

          <div class="video-tool">
            <div class="tool-item">
              <img class="icon-like" src="../assets//icon_9k77fcxlhlt//zan.svg" alt="" />
              <span>{{ video.like_count }}</span>
            </div>
            <div class="tool-item">
              <img class="icon-like" src="../assets//icon_9k77fcxlhlt//pinglun.svg" alt="" />

              <span>{{ video.comment_count }}</span>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { VideosList } from '@/utils/index'
import { ref, reactive } from 'vue'
const obj = reactive({
  page: 1,
  per_page: 7
})
const loading = ref(false)
const finished = ref(false)
import type { Abblist } from '@/types/about'
const list = ref<Abblist[]>([])

const onLoad = async () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  let res = await VideosList(obj)
  console.log(res)
  list.value.push(...res.data)

  // 数据全部加载完成
  if (list.value.length >= 20) {
    finished.value = true
  } else {
    obj.page++
  }
  // 加载状态结束
  loading.value = false
}
</script>

<style lang="scss" scoped>
.box-page {
  margin-bottom: 50px;
}
.icon-play {
  width: 20px;
}

.video-item {
  .video-content {
    position: relative;
    margin: 10px 20px;
    height: calc(56.25vw - 20px);
    color: #fff;
    border-radius: 6px;
    overflow: hidden;

    .video-title {
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      padding: 20px;
      font-size: 15px;
      line-height: 1.6;
      background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(255, 255, 255, 0));
    }

    .video-poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .video-play {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      line-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.35);
      transform: translate(-50%, -50%);

      .m-icon {
        font-size: 48px;
      }
    }

    .video-info {
      z-index: 1;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.45));
    }
  }

  //
  .video-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;

    // 作者
    .video-author {
      display: flex;
      align-items: center;

      .author-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #f5f5f5;
      }

      .author-name {
        margin-left: 12px;
        font-weight: bold;
      }
    }

    // 视频数据
    .video-tool {
      display: flex;
      align-items: center;

      .tool-item {
        display: flex;
        align-items: center;
        margin-left: 20px;
        height: 56px;

        .m-icon {
          font-size: 14px;
        }

        > span {
          margin: 0 8px;
          font-size: 15px;
        }
      }
    }
  }
}

.icon-like {
  width: 20px;
}
</style>
