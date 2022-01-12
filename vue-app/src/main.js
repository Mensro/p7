import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CKEditor from "@ckeditor/ckeditor5-build-classic";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store, CKEditor).use(router).mount("#app");
