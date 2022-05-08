<template lang="pug">
q-header.q-desktop-header.bg-sheet.text-text
  q-toolbar.q-toolbar-desktop.q-mx-auto.q-pa-none.full-height
    q-avatar(icon="logo", size="40px", font-size="40px", square)
    .col-auto.tw-pl-12
      svg-use(icon="logo-text", width="111px", height="22px")
    .col
    .col-auto.text-uppercase.cursor-pointer(@click="onClickLangSwitsh")
      | {{ nextLang }}
</template>

<style scoped lang="scss">
@import "src/css/vars.scss";

.q-desktop-header {
  height: $desktop-layout-header-height;
}

.q-toolbar-desktop {
  max-width: $desktop-layout-max-width;
}
</style>

<script>
import { defineComponent, toRef } from "vue";

import SvgUse from "components/SvgUse.vue";
import useLocaleStore from "@/stores/locale.ts";

export default defineComponent({
  name: "HeaderLayout",
  components: { SvgUse },
  setup() {
    const locale = useLocaleStore();
    const nextLang = toRef(locale, "nextLang");

    function onClickLangSwitsh() {
      locale.setLanng(locale.nextLang);
    }

    return {
      nextLang,
      onClickLangSwitsh,
    };
  },
});
</script>
