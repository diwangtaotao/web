import Vue from 'vue'
import App from './App.vue'
import AES from "./utils/aes";

console.log(AES.encrypt("1"));
console.log(AES.decrypt("3c23d024999394baa7fa4880e0bbd6e8"));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
