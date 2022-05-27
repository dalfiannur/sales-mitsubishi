<script setup lang="ts">
import Button from '../Button.vue'

type Prop = {
  range: (string | number)[];
  active: number;
}

defineEmits(['change']);

const { range } = defineProps<Prop>()

console.log(range)
</script>

<template>
  <Button v-for="page in range" :key="page" :class="{ active: active === page }" @click="$emit('change', page)">
    {{ page !== 'dots' ? page : '...' }}
  </Button>
</template>