import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  const globalProperties = app.config.globalProperties;

  const partDomain = parseInt(process.env.VUE_APP_DOMAIN_PART_TRIM as string) * -1;

  globalProperties.$domain = window.location.hostname.split(".").slice(partDomain).join(".");
  globalProperties.$landingPrefix = process.env.VUE_APP_LANDING_PREFIX_DOMAIN;
  globalProperties.$landing = `https://${process.env.VUE_APP_LANDING_PREFIX_DOMAIN || ""}${globalProperties.$domain}`;
});
