import { createApp } from 'vue'
import App from './App.vue'

//传递给 createApp 的选项用于配置根组件。在使用 mount() 挂载应用时，该组件被用作渲染的起点。
createApp(App).mount('#app')
