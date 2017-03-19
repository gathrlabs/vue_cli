import Vue  from 'vue'
import App  from './App.vue'

export const serverBus = new Vue();

//This is the event bus that we have created to allow the siblings [ServerDetails and Server] to communicate with one another. Where Server is $emit the event and ServerDetails is listening for the event. 

new Vue({
  el: '#app',
  render: h => h(App)
})
