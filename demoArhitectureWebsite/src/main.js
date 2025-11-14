import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Export the app using ViteSSG
export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes, // if router is already created
  },
  ({ app, router, initialState }) => {
    const head = createHead()
    app.use(createPinia())
    app.use(router)
    app.use(head)
  }
)