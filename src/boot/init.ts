import { boot } from "quasar/wrappers";
import locale from "@/stores/locale";

export default boot(async () => {
  const localeFn = locale();
  await localeFn.setLanng();
});
