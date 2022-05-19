<script setup lang="ts">
import { News } from "../typings/News";

interface Prop {
  data: News;
}

const { data } = defineProps<Prop>();
</script>

<template>
  <div class="flex flex-col w-full overflow-hidden bg-primary rounded shadow hover:bg-gray-200 hover:shadow-lg">
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
        class="block text-lg font-semibold"
        >{{ data.title }}</a
      >
    </div>
    <div class="flex items-end justify-between leading-none mt-auto">
      <p class="text-sm text-black p-2">
        by Mohamad Fauzi - {{ new Date(data.created_at).toLocaleDateString("ID-id") }}
      </p>

      <a class="p-2 text-center no-underline text-emerald-400" :href="`/berita/${data.slug}`" target="__blank">
        <span class>Read More</span>
      </a>
    </div>
  </div>
</template>
