import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 2. 引入组件样式
import 'vant/lib/index.css'

app.use(createPinia())
app.use(router)

app.mount('#app')
