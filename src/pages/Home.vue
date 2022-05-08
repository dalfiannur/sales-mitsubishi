<script setup lang="ts">
import useMeta from "../composable/useMeta";
import Button from "../components/Button.vue";
import Map from "../components/Map.vue";
import TestimonialArea from "../components/TestimonialArea.vue";
import ProductArea from "../components/ProductArea.vue";
import NewsArea from "../components/NewsArea.vue";
import useHeadlineBanner from '../composable/useGetHeadlineSlider'
import HeadlineSlider from '../components/HeadlineSlider/HeadlineSlider.vue'

const { data: mainBanners } = useHeadlineBanner();

useMeta({
  title: "Homepage",
});
</script>

<template>
  <HeadlineSlider :items="mainBanners"></HeadlineSlider>
  <div>
    <ProductArea />

    <!-- Berita -->
    <NewsArea />

    <TestimonialArea />

    <div class="relative flex justify-end bg-white">
      <div class="w-full static z-[1]">
        <Map />
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-1 {
  clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%);
}

@media screen and (max-width: 768px) {
  .clip-1 {
    clip-path: none;
  }
}

.clip-2 {
  clip-path: polygon(0% 0%, 35% 0%, 60% 100%, 0% 100%);
}
</style>
