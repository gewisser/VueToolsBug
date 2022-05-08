<template lang="pug">
div
  p.md_tw-ml-55.tw-mr-55.tw-text-appH3.md_tw-text-h2 {{ $t("Dashboard.Welcom") }}
  ul
    li(v-for="todo in todos", :key="todo.id", @click="increment")
      | {{ todo.id }} - {{ todo.content }}
  p.tw-my-4 Count: {{ todoCount }} / {{ meta.totalCount }}
  p Active: {{ active ? "yes" : "no" }}
  p.text-successSuperLight Clicks on todos: {{ clickCount }}
  p.bg-successSuperLight {{ env }}

  q-icon(name="gear", color="successSuperLight", size="24px")
  q-icon(name="chat", color="primary", size="24px")

  svg
    use(xlink:href="/bitbanker-icon-collection.svg#gear")

  div
    q-btn(label="set locale en", @click="onClickSetLang")
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from "vue";
import { Todo, Meta } from "./models";
import useLocaleStore from "@/stores/locale";

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: "ExampleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    const locale = useLocaleStore();

    return {
      env: ref(process.env.VUE_APP_WEBSOCKET_API_URL),
      ...useClickCount(),
      ...useDisplayTodo(toRef(props, "todos")),
      onClickSetLang() {
        locale.setLanng("en").then();
      },
    };
  },
});
</script>
