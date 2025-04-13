import { type App } from "vue";
import { createPinia } from "pinia";

export function pluginStore(app: App<Element>) {
  const pinia = createPinia();

  app.use(pinia);
}
