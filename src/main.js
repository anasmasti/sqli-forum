import router from "./routes";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

let app = createApp(App);

const files = require.context("./shared", true, /\.vue$/i);

files.keys().map((key) => {
  app.component(
    files(key).default.name ?? key.split("/").pop().split(".")[0],
    files(key).default
  );
});

app.use(router);
app.use(store);

app.mount("#app");
