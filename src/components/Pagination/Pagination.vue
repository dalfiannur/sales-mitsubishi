<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import Button from '../Button.vue';
import Group from './Group.vue'
import Items from './Items.vue'
import { usePagination } from '../../hooks/use-pagination';

type Prop = {
  withEdges?: boolean;
  withControls?: boolean;
  total: number;
  perPage: number;
}

const emit = defineEmits(['change']);
const props = defineProps<Prop>()

const {
  withEdges,
  total
} = toRefs(props);

const page = ref<number>(1);
const { range, active, setPage } = usePagination({
  page: page.value,
  initialPage: 1,
  boundaries: 1,
  siblings: 1,
  total: total.value,
  onChange: (e) => emit('change', e)
})

watch(active, (a) => {
  console.log(a)
})
</script>

<template>
  <Group>
    <Button v-if="withEdges">First</Button>
    <Button v-if="withControls">&#60;</Button>

    <Items :page="page" :active="active" :range="range" @change="setPage" />

    <Button v-if="withControls">&#62;</Button>
    <Button v-if="withEdges">Last</Button>
  </Group>
</template>