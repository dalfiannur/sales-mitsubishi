<script setup lang="ts">
import useMeta from "../composable/useMeta";
import usePaginationGetter from "../composable/usePaginationGetter";
import { News } from "../typings/News";

useMeta({
  title: "Berita",
});

const { data: news } = usePaginationGetter<News>({
  path: "news",
  perPage: 5,
  autoFetch: true,
});

const getLink = (slug: any) => "/berita/" + slug;
</script>

<template>
  <div class="flex flex-col items-center py-12 relative bg-primary">
    <div class="absolute w-full h-full top-0 left-0 bg-secondary z-[1] clip-3" />
    <div class="w-full max-w-screen-lg static z-[2]">
      <h2 class="text-3xl font-bold text-white">Berita</h2>

      <div class="flex gap-10 mt-10">
        <div class="flex flex-col flex-1 gap-5">
          <div class="flex gap-5" v-for="item in news" :key="item.slug">
            <div>
              <img
                class="rounded-lg w-72 aspect-video cursor-pointer"
                :src="item.thumbnailUrl"
                @click="$router.push(getLink(item.id))"
              />
            </div>
            <div class="p-2">
              <div class="text-sm font-bold text-right text-white rounded-lg w-fit">
                <span class="mr-2 underline">Terbit</span>
                {{ item.created_at }}
              </div>
              <div class="mt-2 text-xl text-white">
                <a
                  :href="getLink(item.slug)"
                  @click.prevent="$router.push(getLink(item.slug))"
                  >{{ item.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="bg-white rounded-lg w-72 h-fit">sdf</div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-3 {
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>
