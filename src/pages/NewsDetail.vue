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
      <div class="flex-1 p-4">
        <div class="text-sm text-gray-500 py-1">{{ data.created_at }}</div>

        <h2 class="text-3xl font-bold py-1">{{ data.title }}</h2>

        <div class="flex">
          <div class="text-base text-gray-500 py-1">Author :</div>
          <div class="text-base text-gray-500 py-1 px-2">Mohamad Fauzi</div>
          <!-- Author -->
        </div>

        <img
          class="object-cover w-full aspect-video mt-4"
          :src="data.thumbnailUrl"
        />

        <div class="mt-5 text-base text-justify" v-html="data.content" />
      </div>

      <div class="w-full md:w-52 p-5 md:p-0 mt-5">
        <strong class="text-lg font-bold">Baca Juga</strong><br />
        <span class="block w-full border-b-2 border-gray-400 mb-5 mt-1"></span>

        <div
          class="mb-10 border-b-2 border-secondary"
          v-for="item in news"
          :key="item.slug"
        >
          <a
            :href="'/berita/' + item.slug"
            class="my-2"
            @click="$router.push('/berita/' + item.slug)"
          >
            <img
              class="w-full aspect-video rounded-xl"
              :href="'/berita/' + item.slug"
              :src="item.thumbnailUrl"
              :alt="item.title"
            />
          </a>
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
