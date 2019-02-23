import Vue from 'vue';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';
import Vuetify, { VSelect } from 'vuetify/lib';

Vue.use(Vuetify, {
  theme: {
    primary: '#14A76C',
    secondary: '#FFE400',
    accent: '#FF652F',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  components: {
    VSelect
  },
  customProperties: true,
  iconfont: 'fa'
});
