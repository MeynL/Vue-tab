import Vue from 'vue'
import Tab from './tab/tab.vue';
import TabPanel from './tab/tab-panel.vue';
import App from './App.vue'

Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);
new Vue({
  el: '#app',
  render: h => h(App)
})
