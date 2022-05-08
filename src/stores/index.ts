import { store } from "quasar/wrappers";
import { createPinia } from "pinia";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

function globalInstanceState() {
  return {
    isDev: process.env.NODE_ENV === "development",
  };
}

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();

  pinia.use(globalInstanceState);

  return pinia;
});
