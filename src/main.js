/* eslint-disable */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './vuex-store'

const piniaStore = createPinia();

createApp(App).use(store).use(piniaStore).use(router).mount('#app')
