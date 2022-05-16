import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import '@glidejs/glide/src/assets/sass/glide.core.scss'
import '@glidejs/glide/src/assets/sass/glide.theme.scss'
//@ts-ignore
import JwPagination from 'jw-vue-pagination';
Vue.component()

createApp(App)
    .use(router)
    .mount('#app')
