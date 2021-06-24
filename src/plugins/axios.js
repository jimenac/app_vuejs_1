import Vue from 'vue';

import axios from 'axios'
import VueAxios from 'vue-axios'


//Agregamos la URL base de nuestra API
axios.defaults.baseURL = process.env.VUE_APP_BASEURL

Vue.use(VueAxios, axios)

export default new VueAxios({
  
});
