<script setup lang="ts">
import useMeta from "../composable/useMeta";
// @ts-ignore
import Button from "../components/Button.vue";
// @ts-ignore
import Map from "../components/Map.vue";
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
    <div class="relative flex justify-end bg-white">
      <div class="w-full static z-[1]">
        <a
          href="https://www.google.com/maps/place/Mitsubishi+DIPO+Slipi+Gatot+Subroto/@-6.2028699,106.7997685,15.9z/data=!4m5!3m4!1s0x2e69f79e50f8af2d:0xc86ce89d3f24d675!8m2!3d-6.2032859!4d106.8012544" target="_blank">
          <Map/>
        </a>
      </div>
    </div>
    <section id="kontak"></section>
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
