import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/style.css'
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true ); // set second parameter to true if you want to use a debugger
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

createApp(App).mount('#app')
