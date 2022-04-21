<script setup lang="ts">
import useMeta from "../composable/useMeta";
import Button from "../components/Button.vue";
import Map from "../components/Map.vue";
import TestimonialArea from "../components/TestimonialArea.vue";
import ProductArea from "../components/ProductArea.vue";
import NewsArea from "../components/NewsArea.vue";

useMeta({
  title: "Homepage",
});
</script>

<template>
  <div class="bg-fixed bg-center bg-no-repeat bg-cover" style="background-image: url('/img/background.webp')">
    <div class="pt-10 h-[720px] bg-secondary bg-opacity-60 flex justify-center items-center">
      <div class="flex flex-col items-center justify-between w-full max-w-screen-lg md:flex-row">
        <div class="w-full md:w-[600px] px-4 md:px-0">
          <div class="text-xl font-bold text-red-500">Promo</div>
          <div class="text-6xl font-bold text-white">
            Waktunya berkendara dengan mobil idamanmu.
          </div>
          <div class="mt-5 text-3xl font-bold text-yellow-500">
            Penawaran
            <span class="text-white">Special</span> untuk produk yang baru datang.
            <br />
            <span class="text-xl">Diskon sampai dengan 15%</span>
          </div>
        </div>
        <div class="flex justify-center flex-1 my-10 md:my-0">
          <Button tag="a" href="https://wa.me/6281280438004?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil"
            target="_blank" size="lg">Hubungi Kami</Button>
        </div>
      </div>
    </div>

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
