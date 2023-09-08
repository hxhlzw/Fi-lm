import axios, { type AxiosRequestConfig } from 'axios'
const server = axios.create({
  baseURL: 'https://test-h5-api.ixook.com',
  timeout: 10000
})

server.interceptors.request.use(
  (config) => {
    if (config.method?.toLowerCase() == 'get') {
      config.params = config.data
    }
    const token = localStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

server.interceptors.response.use(
  ({ data }) => {
    return data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const http = <T = any>(config: AxiosRequestConfig<any>) => {
  return server.request<T, T>(config)
}
