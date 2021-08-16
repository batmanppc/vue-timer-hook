// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp, ComponentPublicInstance } from 'vue'
import App from './App.vue'

declare global {
  interface Window {
    vm: ComponentPublicInstance
  }
}

const app = createApp(App)

window.vm = app.mount('#app')
