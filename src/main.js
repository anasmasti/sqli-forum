import router from "./routes";
import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);

app.use(router);

const files = require.context("./shared", true, /\.vue$/i);

files.keys().map((key) => {
    console.log(key);
  app.component(
    files(key).default.name ?? key.split("/").pop().split(".")[0],
    files(key).default
  );
});

app.mount("#app");
