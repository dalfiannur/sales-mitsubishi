<script setup lang="ts">
import { News } from "../typings/News";

interface Prop {
  data: News;
}

const { data } = defineProps<Prop>();
</script>

<template>
  <div
    class="w-full overflow-hidden bg-primary rounded shadow hover:bg-gray-200 hover:shadow-lg"
  >
    <div class="w-full aspect-square">
      <a
        :href="`/berita/${data.slug}`"
      >
        <img class="object-cover w-full h-full" :src="data.thumbnailUrl" />
      </a>
    </div>
    <div class="p-5">
      <a
        :href="`/berita/${data.slug}`"
        @click.prevent="$router.push('/berita/' + data.slug)"
        class="text-lg font-semibold text-center"
        >{{ data.title }}</a
      >
    </div>
  </div>
</template>
