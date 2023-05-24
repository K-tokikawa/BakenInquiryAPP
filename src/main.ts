import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-light-indigo/theme.css"; // テーマ
import "primevue/resources/primevue.min.css"; // ベース
import "primeicons/primeicons.css"; // アイコン

import axios from "axios"
import VueAxios from "vue-axios"

import { createApp, reactive } from 'vue';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';
import ConfirmationService from 'primevue/confirmationservice';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

import InputNumber from 'primevue/inputnumber';
import Password from 'primevue/password';
import InlineMessage from 'primevue/inlinemessage';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

const app = createApp(App)
app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

app.use(VueAxios, axios)
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router)

app.component('InputNumber', InputNumber)
app.component('InputPassword', Password)
app.component('InlineMessage', InlineMessage)
app.component('PrimevueButton', Button)
app.component('ProgressSpinner', ProgressSpinner)
app.component('TreeTable', TreeTable)
app.component('VueColumn', Column)

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);

app.mount('#app');