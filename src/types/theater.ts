// 正在热映定义类型
export type theaterType = {
  sortby: string
  length: Number

  order: string //排序方式

  // 总数
  poster: any //图片
  title: string //标题
  year: number //年
  genres: string
  countries: string
  rating: string //评分
  // 影片列表
}

export type theaterTypes = theaterType[]

export type thType = {
  message: string
  page: number //页码
  per_page: number //每页条数，最多 30 条
  total: number
  data: theaterType
}
