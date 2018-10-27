import Vue from 'vue'

// Lib imports
import axios from 'axios'

Vue.prototype.$http = axios
Vue.http = Vue.prototype.$http = axios
