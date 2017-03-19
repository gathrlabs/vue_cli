import Vue  from 'vue'
import App  from './App.vue'

export const eventBus = new Vue({
  methods: {
    viewServer() {
      
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
