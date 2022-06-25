import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import { Icon,Search,Tab,Tabs,Sidebar,SidebarItem,TreeSelect,Stepper} from 'vant'

const app = createApp(App)
app.use(router)

app.use(Icon)
app.use(Search)
app.use(Tab)
app.use(Tabs)
app.use(Sidebar)
app.use(SidebarItem)
app.use(TreeSelect)
app.use(Stepper)
app.mount('#app')

