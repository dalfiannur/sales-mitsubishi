<script setup lang="ts">
import { useRoute } from "vue-router";
import useEntityGetter from "../composable/useEntityGetter";
import useMeta from "../composable/useMeta";
import usePaginationGetter from "../composable/usePaginationGetter";
import { News } from "../typings/News";

const route = useRoute();

useMeta({
  title: "Berita",
});

const { data } = useEntityGetter<News>(route.params.slug as string, {
  path: "news",
  autoFetch: true,
});
const { data: news } = usePaginationGetter<News>({
  path: "news",
  perPage: 3,
  autoFetch: true,
});
</script>

<template>
  <div v-if="data" class="flex justify-center pt-5">
    <div class="flex flex-col md:flex-row flex-1 max-w-screen-lg gap-5">
      <div class="flex-1 p-5">
        <img class="object-cover w-full aspect-video" :src="data.thumbnailUrl" />
        <div class="flex justify-end mt-2">
          <div class="text-sm">{{ data.created_at }}</div>
        </div>
        <h2 class="text-3xl font-bold mt-5">{{ data.title }}</h2>
        <div class="mt-5 indent-8" v-html="data.content" />
      </div>

      <div class="w-full md:w-52 p-5 md:p-0 mt-5">
        <div
          class="mb-10 border-b-2 border-secondary"
          v-for="item in news"
          :key="item.slug"
        >
          <img
            class="w-full aspect-video rounded-xl"
            :src="item.thumbnailUrl"
            :alt="item.title"
          />
          <div class="py-2">
            <a
              :href="'/berita/' + item.slug"
              class="my-2"
              @click="$router.push('/berita/' + item.slug)"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
