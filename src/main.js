import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

import App from './App.vue'
import filmler from './components/filmler.vue'
import Comedy from './components/Comedy.vue'
import Drama from './components/Drama.vue'
import Short from './components/Short.vue'
import Detay_Ekranı from './components/Detay_Ekranı.vue'


Vue.config.productionTip = false

const router =new VueRouter({

  routes:[
    { path: '/', component:filmler},
    { path: '/Comedy',component:Comedy},
    { path: '/Drama',component:Drama},
    { path: '/Short',component:Short},
    {path: '/:id',component:Detay_Ekranı}
  ],
  mode:'history'

})


new Vue({
  render: h => h(App),
  router
}).$mount('#appa')
