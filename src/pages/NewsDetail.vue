<script setup lang="ts">
import { useRoute } from "vue-router";
import useGetNews from "../composable/useGetNews";
import useGetNewsBySlug from "../composable/useGetNewsBySlug";
import useMeta from "../composable/useMeta";

const route = useRoute();

useMeta({
  title: "Berita",
});

const { data } = useGetNewsBySlug(route.params.slug as string);

const { data: news } = useGetNews({
  page: 1,
  perPage: 3,
});
</script>

<template>
  <div v-if="data" class="flex justify-center pt-5">
    <div class="flex flex-col md:flex-row flex-1 max-w-screen-lg gap-5">
      <div class="flex-1 p-5">
        <h2 class="text-3xl font-bold">{{ data.title }}</h2>
        <img class="object-cover w-full mt-5 aspect-video" :src="data.thumbnail" />
        <div class="flex justify-end mt-2">
          <div class="text-sm">{{ data.created_at }}</div>
        </div>
        <div class="mt-5 indent-8">{{ data.content }}</div>
      </div>

      <div class="w-full md:w-52 p-5 md:p-0">
        <div
          class="mb-10 border-b-2 border-secondary"
          v-for="item in news"
          :key="item.slug"
        >
          <img
            class="w-full aspect-video rounded-xl"
            :src="item.thumbnail"
            :alt="item.title"
          />
          <div class="py-2">
            <a href="/berita/2" class="my-2" @click="$router.push('/berita/2')">{{
              item.title
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
