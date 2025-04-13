import "./style.css";
import { createApp } from "./main";
import { pluginAdapter } from "#/adapters";
import { createAppRouter } from "#/router";

const { app } = createApp();

pluginAdapter(app);

app.use(createAppRouter(false));

app.mount("#app");
