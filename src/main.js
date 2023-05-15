import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/林剑豪 - 用户体验设计师 - 简历.pdf', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')