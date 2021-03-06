import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#f1faee',
          secondary: '#A8DADC',
          accent: '#457B9D',
          error: '#E63946',
          info: '#1D3557',
        },
      },
    },
  })

export default vuetify