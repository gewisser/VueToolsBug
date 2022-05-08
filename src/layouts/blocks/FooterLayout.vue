<template lang="pug">
q-footer.bg-white.text-text
  q-toolbar.q-toolbar-desktop.q-mx-auto.q-pa-none
    .col-auto
      q-avatar(icon="logo", size="50px", font-size="50px", square)
</template>

<style scoped lang="scss">
@import "src/css/vars.scss";

.q-toolbar-desktop {
  max-width: $desktop-layout-max-width;
  min-height: $desktop-layout-footer-height;
  align-items: start;
  padding-top: 50px;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterLayout",

  setup() {
    return {};
  },
});
</script>
