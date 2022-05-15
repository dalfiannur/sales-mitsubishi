<script setup lang="ts">
import Map from '../components/Map.vue'
import useMeta from "../composable/useMeta";
// @ts-ignore
import Button from "../components/Button.vue";
// @ts-ignore
import TestimonialArea from "../components/TestimonialArea.vue";
// @ts-ignore
import ProductArea from "../components/ProductArea.vue";
// @ts-ignore
import NewsArea from "../components/NewsArea.vue";
import useHeadlineBanner from '../composable/useGetHeadlineSlider'
// @ts-ignore
import HeadlineSlider from '../components/HeadlineSlider/HeadlineSlider.vue'

const { data: mainBanners } = useHeadlineBanner();

useMeta({
  title: "Homepage",
});
</script>

<template>
  <HeadlineSlider :items="mainBanners"></HeadlineSlider>
  <div>
    <section id="produk">
      <ProductArea />
    </section>
    <section id="artikel">
      <NewsArea />
    </section>
    <section>
      <TestimonialArea />
    </section>
    <div id="kontak" class="grid grid-cols-3 p-5 gap-5">
      <div class="flex-1 text-secondary text-center">
        <div class="flex shadow-md border rounded-md p-5 h-full gap-5">
          <div class="w-[40%] flex">
            <img src="/img/foto.jpg" class="w-full object-cover aspect-square rounded-lg" />
          </div>

          <div class="text-xl flex-1">
            <h3>Susilila</h3>
            <h3>Marketer Mitsubishi Jakarta </h3>
          </div>
        </div>
      </div>
      <div class="flex-1 col-span-2">
        <div class="border rounded-lg overflow-hidden">
          <Map />
        </div>
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
