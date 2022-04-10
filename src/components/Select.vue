<script lang="ts" setup>
import { toRefs } from "vue";

interface Item {
  label: string | number;
  value: string | number;
}
interface Prop {
  modelValue?: string | number;
  items: Item[];
}

const props = withDefaults(defineProps<Prop>(), {
  modelValue: "",
});
const { modelValue, items } = toRefs(props);
const emit = defineEmits(["update:modelValue", "change"]);
const inputHandler = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("change", target.value);
  emit("update:modelValue", target.value);
};
</script>
<template>
  <select
    :value="modelValue"
    @change="inputHandler"
    class="border border-gray-200 focus:outline-none focus:border-orange-400 rounded p-2 w-full"
  >
    <option
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      v-text="item.label"
    />
  </select>
</template>
