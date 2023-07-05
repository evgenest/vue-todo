// import css styles
// import './assets/main.css'
import '@node_modules/todomvc-app-css/index.css'

// create the vue app
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
