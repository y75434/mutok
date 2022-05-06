import Vue from 'vue';
import Vuetify,{ VTextField } from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
    }
  },
  theme: {
    themes: {
      light: {
        green: '#4E9EAC',
        primary: '#3f51b5',
        secondary: '#F3F6FC',
        lightblack: '#666666;',
        error: '#b71c1c',
        success: '#CCE1E8',
        darkgrey: 'c4c4c4',
        grey: '#7E7E7E;',
        lightgrey: '#F2F2F2',
        black: '#4B4B4B',
        purple:'',
        bg: '#fafafa',
        herf: '#22B2DE',
        redhref:'#FB6376',
      },
    },
  },
  components: {
    VTextField
  }
});
