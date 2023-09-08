import { http } from '@/utils/request'

// 首页接口
export const HomeList = (data: any) => {
  return http({
    url: '/index',
    method: 'get',
    data
  })
}
