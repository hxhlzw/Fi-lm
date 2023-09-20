import { http } from '@/utils/request'
import type { thType } from '@/types/theater'
import type { AboutType } from '@/types/about'
import type { moviesType } from '@/types/moviesList'
// 首页接口
export const HomeList = (data: any) => {
  return http({
    url: '/index',
    method: 'get',
    data
  })
}

// 正在热映接口
export const TheaList = (data: any) => {
  return http<thType>({
    url: '/movie/theater',
    method: 'get',
    data
  })
}

// 即将上映接口
export const ComingList = (data: any) => {
  return http<thType>({
    url: '/movie/coming',
    method: 'get',
    data
  })
}
// 那年今日接口
export const todayList = (data: any) => {
  return http<thType>({
    url: '/movie/today',
    method: 'get',
    data
  })
}

// 影视列表
export const moviesList = (data: any) => {
  console.log(data.id)
  return http({
    url: '/movies',
    method: 'get',
    data
  })
}

// 视频列表
export const VideosList = (data: any) => {
  return http<AboutType>({
    url: '/videos',
    method: 'get',
    data
  })
}
// 登录
export const LoginApi = (data: any) => {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}

// 我的
export const getUser = (data: any) => {
  return http({
    url: '/user',
    method: 'get',
    data
  })
}
// /logout退出登录
export const UserRomve = (data: any) => {
  return http({
    url: '/logout',
    method: 'DELETE',
    data
  })
}

// 分类
// /categories
export const getMovies = (data: any) => {
  return http({
    url: '/categories',
    method: 'get',
    data
  })
}

// 影视列表

export const GetmoviesList = (data: any) => {
  return http<moviesType>({
    url: '/movies',
    method: 'get',
    data
  })
}
