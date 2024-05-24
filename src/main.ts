import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElenmentPlusIconVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import * as moment from "moment";
// import 'moment/dist/locale/zh-cn'
// moment.locale('zh-cn')

const app= createApp(App)
for(const[key,component] of Object.entries(ElenmentPlusIconVue)){
    app.component(key,component)

}
app.use(ElementPlus,{locale:zhCn})
app.use(router)
app.mount('#app')

