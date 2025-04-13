import { type App } from "vue";

import { primeVueConfig, Aura } from "./primevue";
import { pluginStore } from "./store";
import { Tooltip } from "./primevue/components";

export function pluginAdapter(app: App<Element>) {
  app.use(primeVueConfig, {
    theme: {
      preset: Aura,
    },
  });

  app.directive("tooltip", Tooltip);

  pluginStore(app);
}
