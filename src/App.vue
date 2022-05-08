<template lang="pug">
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "App",
  setup() {
    const $q = useQuasar();

    $q.iconMapFn = (iconId) => {
      return {
        icon: `svguse:bitbanker-icon-collection.svg#${iconId}`,
      };
    };
  },
});
</script>
