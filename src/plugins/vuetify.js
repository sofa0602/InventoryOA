import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pl from 'vuetify/lib/locale/pl';
import uk from 'vuetify/lib/locale/uk';

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pl, uk },
    current: 'uk',
  }
})
