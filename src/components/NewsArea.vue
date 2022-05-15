<script lang="ts" setup>
import usePaginationGetter from '../composable/usePaginationGetter';
import Button from './Button.vue';
import NewsCard from './NewsCard.vue'
import { News } from '../typings/News';

const {
  data: newsList,
  perPage,
  setPerPage,
  currentPage,
  totalPage,
  setOrder: setOrderNews,
} = usePaginationGetter<News>({
  path: "news",
  perPage: 3,
  autoFetch: true,
});

const orderNewsBy = (order: string) => {
  if (order === "latest") {
    setOrderNews("created_at", false);
  }

  if (order === "popular") {
  }
};


</script>
<template>
<<<<<<< HEAD
  <div class="relative flex justify-center py-10 bg-white">
    <div class="absolute top-0 left-0 z-[1] w-full h-full hidden md:block" />

    <div class="w-full max-w-screen-lg z-[2] px-4 md:px-0">
      <div class="flex justify-between">
        <div class="text-4xl font-bold text-secondary">Artikel</div>
        <div class="flex gap-2 text-black md:text-white">
=======
  <div class="relative flex justify-center py-10 bg-primary-grad bg-primary">
    <div class="absolute top-0 left-0 z-[1] w-full h-full clip-4 hidden md:block" />

    <div class="w-full max-w-screen-lg z-[2] px-4 md:px-0">
      <div class="justify-center">
        <div class="text-4xl font-bold text-secondary text-center">Artikel</div>
        <div class="flex text-lg gap-2 mt-5 text-black md:text-secondary justify-center">
>>>>>>> 7285eddc92697f4aa3616af56da6b3e7e4515b10
          <a href="#" @click="orderNewsBy('latest')">Terbaru</a>
          <div>|</div>
          <a href="#" @click="orderNewsBy('popular')">Terpopuler</a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
        <NewsCard v-for="item in newsList" :key="item.slug" :data="item" />
      </div>

      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <div v-for="items in $data.totalPage" :key="items">
          <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {{ items }} </a>
        </div>

      </nav>
      
    </div>
  </div>
</template>