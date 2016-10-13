import Vue from 'vue'
import VueRouter from 'vue-router'

let buildVersion = 'BUILDVERSION_PLACEHOLDER'
console.log('Build on ' + buildVersion)

Vue.config.debug = true

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/main',
    component: require('./modules/index.vue'),
    children: [{
      path: '111',
      component: require('./modules/pages/111.vue')
    }, {
      path: '222',
      component: require('./modules/pages/222.vue')
    }]
  }, {
    path: '/',
    redirect: '/main'
  }]
})

new Vue({ router }).$mount('#app')
