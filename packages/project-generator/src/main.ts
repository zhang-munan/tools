import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import Antd from 'ant-design-vue';
import "/@/assets/style/global.scss";
import "/@/assets/style/tailwind.css";
import "/@/assets/style/theme.scss";
import 'ant-design-vue/dist/reset.css';

createApp(App).use(Antd).use(router).use(createPinia()).mount("#app");
