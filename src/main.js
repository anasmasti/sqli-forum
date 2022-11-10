import router from "./routes";
import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);

app.use(router);

app.mount("#app");
