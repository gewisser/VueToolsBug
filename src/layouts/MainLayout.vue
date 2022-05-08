<template lang="pug">
q-layout(view="hhh lpR fff")
  header-layout
  q-page-container.bg-sheet
    router-view.general-desktop-layout.q-mx-auto
  footer-layout
</template>

<style scoped lang="scss">
@import "src/css/vars.scss";

.general-desktop-layout {
  max-width: $desktop-layout-max-width;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLayout from "layouts/blocks/HeaderLayout.vue";
import FooterLayout from "layouts/blocks/FooterLayout.vue";

export default defineComponent({
  name: "MainLayout",
  components: { FooterLayout, HeaderLayout },
  setup() {
    return {};
  },
});
</script>
