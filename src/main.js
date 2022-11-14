import router from "./router";
import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import firebase from "firebase/compat/app";
import firebaseConfig from "@/config/firebaseConfig";

// Initialize APP
let app = createApp(App);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get shared components
const files = require.context("./components/shared", true, /\.vue$/i);

// Make shared components gobal
files.keys().map((key) => {
  app.component(
    files(key).default.name ?? key.split("/").pop().split(".")[0],
    files(key).default
  );
});

// Use router plugin
app.use(router);

// Use store plugin
app.use(store);

app.mount("#app");
