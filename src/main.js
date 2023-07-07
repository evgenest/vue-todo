// import css styles
// import './assets/main.css'
import '@todomvc-app-css/index.css'

// create the vue app
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.directive('focus', (el, binding) => {
  if (binding.value) el.focus()
})

app.use(router)
app.use(pinia)

app.mount('#app')
