import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
const API = 'http://127.0.0.1:3000';

new Vue({
  render: h => h(App),
  router,
  methods:{
    getJson(url){
      console.log(`${API}/${url}`);
      return fetch(`${API}/${url}`)
          .then(result => result.json())
          .catch(error => {
            console.log(`Ошибка сервера ${error}`);
          })
    },
    postJson(url, data) {
      return fetch(`${API}/${url}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    putJson(url, data) {
      return fetch(`${API}/${url}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    deleteJson(url, data) {
      return fetch(`${API}/${url}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
  }
}).$mount('#app')
