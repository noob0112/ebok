import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import { createAppRouter } from './router'
import { pluginAdapter } from './adapters';

/**
 * @param {string} _url
 */
export async function render(url: string) {
  const { app } = createApp()

  pluginAdapter(app);

  const router = createAppRouter(true)
  await router.push(url)
  await router.isReady()
  app.use(router)


  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {}
  const html = await renderToString(app, ctx)

  return { html }
}
