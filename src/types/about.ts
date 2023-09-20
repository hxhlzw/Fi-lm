export type AboutType = {
  message: string
  page: number
  per_page: string
  data: Abbtype
}
export type Abbtype = AboutType[]

export type Abblist = {
  author: object
  collection_count: number
  comment_count: number
  duration: number
  id: number
  like_count: number
  movie: null
  play_count: number
  poster: string
  size: string
  title: string
  type: string
  type_zh: string
  user_id: number
  uuid: string
}
