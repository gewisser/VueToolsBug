import { setCssVar } from "quasar";
import theme from "@/themes/light";

for (const prop in theme) {
  setCssVar(prop, theme[prop]);
}
