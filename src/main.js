import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
let app=createApp(App);
console.log("============app==============",app);
app.use(store).use(router);
let vm=app.mount("#app");
console.log("============vm==============",vm);