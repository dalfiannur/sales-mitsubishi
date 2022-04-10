<script lang="ts" setup>
import { toRefs } from "vue";

interface Prop {
  modelValue: string | number;
  type?: "text" | "textarea";
}

const props = withDefaults(defineProps<Prop>(), {
  modelValue: "",
  type: "text",
});
const { modelValue, type: types } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);
const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
<template>
  <component
    :is="types === 'text' ? 'input' : 'textarea'"
    :value="modelValue"
    @input="inputHandler"
    class="border border-gray-200 focus:outline-none focus:border-orange-400 rounded p-2 w-full"
  />
</template>
