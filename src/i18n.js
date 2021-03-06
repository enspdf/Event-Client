import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Formatter from './formatter';

Vue.use(VueI18n);

const locale = 'es-CO';
const formatter = new Formatter({ locale });

export default new VueI18n({
    locale,
    formatter,
    messages: {
        "es-CO": {

        }
    }
});