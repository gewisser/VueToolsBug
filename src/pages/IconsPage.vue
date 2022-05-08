<template lang="pug">
.column.q-pa-lg
  h4.text-center Кликни на карточку чтобы скопировать название иконки в буфер
  .row.items-center.justify-center.q-gutter-lg
    q-btn(v-for="icon in iconList", no-caps, :key="icon", :icon="icon", :label="icon", padding="lg", size="lg", stack, @click="copyToClipboard(icon).then()")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { copyToClipboard } from "quasar";

import axios from "axios";

type TElement = HTMLElement | null;

export default defineComponent({
  setup() {
    const iconList = ref<string[]>([]);

    const generateIconList = async () => {
      try {
        const { data } = await axios.get("/bitbanker-icon-collection.svg");

        if (typeof data !== "string") return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "image/svg+xml");
        const nodeIterator = doc.createNodeIterator(doc, NodeFilter.SHOW_ELEMENT);

        let currentNode: TElement;

        while ((currentNode = nodeIterator.nextNode() as TElement)) {
          if (currentNode.nodeName !== "symbol" || !currentNode.id) {
            continue;
          }

          iconList.value.push(currentNode.id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    generateIconList();

    return {
      iconList,
      copyToClipboard,
    };
  },
});
</script>
