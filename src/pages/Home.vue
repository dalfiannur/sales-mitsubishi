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
        <div class="flex border rounded-md p-5 h-full gap-5">
          <div class="w-[40%] flex">
            <img src="/img/foto.jpg" class="w-full object-cover aspect-square rounded-lg" />
          </div>

          <div class="text-xl flex-1">
            <h3 class="text-md">Marketer Mitsubishi Jakarta </h3>
            <h3 class="text-2xl font-bold mt-5">Susi Rahim</h3>
            <div class="mt-10">
              <a href="tel:0215709057" class="flex items-center gap-3">
                <img src="/img/phone.png" class="w-7 h-7" />
                <span class="hidden text-sm md:block">021-570 9057</span>
              </a>
              <a href="mail:susilila168@gmail.com" class="flex items-center gap-3 mt-0 md:mt-3">
                <img src="/img/gmail.png" class="w-7 h-7" />
                <span class="hidden text-sm  md:block">susilila168@gmail.com</span>
              </a>
              <a href="https://wa.me/6281290671767?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil"
                target="__blank" class="flex items-center gap-3 mt-0 md:mt-3">
                <img src="/img/whatsapp.png" class="w-7 h-7" />
                <span class="hidden text-sm md:block">+62 812 906 717 67</span>
              </a>
            </div>
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
