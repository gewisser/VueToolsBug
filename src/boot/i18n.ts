import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: "none",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
