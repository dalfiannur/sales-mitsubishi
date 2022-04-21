<script lang="ts" setup>
import usePaginationGetter from '../composable/usePaginationGetter';
import Button from './Button.vue';
import NewsCard from './NewsCard.vue'
import { News } from '../typings/News';

const {
  data: newsList,
  perPage,
  setPerPage,
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

const loadMoreNews = () => {
  setPerPage(perPage.value + 3);
};
</script>
<template>
  <div class="relative flex justify-center py-10 bg-primary-grad bg-primary">
    <div class="absolute top-0 left-0 z-[1] w-full h-full bg-secondary clip-4 hidden md:block" />

    <div class="w-full max-w-screen-lg z-[2] px-4 md:px-0">
      <div class="flex justify-between">
        <div class="text-4xl font-bold text-secondary">Berita</div>
        <div class="flex gap-2 text-black md:text-white">
          <a href="#" @click="orderNewsBy('latest')">Terbaru</a>
          <div>|</div>
          <a href="#" @click="orderNewsBy('popular')">Terpopuler</a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
        <NewsCard v-for="item in newsList" :key="item.slug" :data="item" />
      </div>
      <div class="flex justify-center mt-10">
        <Button @click="loadMoreNews">Tampilkan Lebih Banyak</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.clip-4 {
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>