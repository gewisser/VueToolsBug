<template lang="pug">
svg(:style="style")
  use(:xlink:href="iconFromCoolection")
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgUse",
  props: {
    icon: { type: String, default: undefined },
    width: { type: String, default: undefined },
    height: { type: String, default: undefined },
  },
  setup(props) {
    const iconFromCoolection = computed(() => {
      return `/bitbanker-icon-collection.svg#${props.icon}`;
    });

    const style = computed(() => {
      return {
        width: props.width,
        height: props.height,
      };
    });

    return {
      iconFromCoolection,
      style,
    };
  },
});
</script>
