<script lang="ts" setup>
interface Prop {
  label: string;
}

const {} = defineProps<Prop>();
</script>

<template>
  <div class="mb-5">
    <label class="">{{ label }}*</label>
    <div class="mt-1">
      <slot />
    </div>
  </div>
</template>
