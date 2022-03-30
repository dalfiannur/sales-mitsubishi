<script setup lang="ts">
import useMeta from "../composable/useMeta";
import useGetProducts from "../composable/useGetProducts";
import BannerSlider from "../components/BannerSlider.vue";
import Button from "../components/Button.vue";
import ProductCard from "../components/ProductCard.vue";
import Map from "../components/Map.vue";
import Testimonial from "../components/Testimonial.vue";
import NewsCard from "../components/NewsCard.vue";
import useGetNews from "../composable/useGetNews";
import TestimonialImage from "../components/TestimonialImage.vue";
import useGetTestimonials from "../composable/useGetTestimonials";

useMeta({
  title: "Homepage",
});

const { data: products } = useGetProducts({
  page: 1,
  perPage: 3,
});

const { data: newsList } = useGetNews({
  page: 1,
  perPage: 3,
});

const { data: testimonials } = useGetTestimonials();
</script>

<template>
  <div
    class="bg-fixed bg-center bg-no-repeat bg-cover"
    style="background-image: url('/img/background.webp')"
  >
    <BannerSlider />

    <div
      id="produk"
      class="relative flex flex-col items-center justify-center pt-10 pb-10 bg-red-ruby"
    >
      <div class="absolute z-[1] top-0 left-0 clip-3 h-full w-full bg-black" />
      <div class="flex items-end justify-between w-full max-w-screen-lg static z-[2]">
        <div>
          <h5 class="text-3xl font-bold text-white">Produk Terbaru</h5>
          <h6 class="font-semibold text-white">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum
          </h6>
        </div>
        <div>
          <Button @click="$router.push('/produk')">Lainnya</Button>
        </div>
      </div>
      <div class="grid w-full max-w-screen-lg grid-cols-3 gap-10 mt-10 static z-[2]">
        <ProductCard v-for="item in products" :key="item.name" :data="item" />
      </div>
    </div>

    <div class="pt-10 h-[590px] bg-black bg-opacity-60 flex justify-center items-center">
      <div class="flex items-center justify-between w-full max-w-screen-lg">
        <div class="w-[600px]">
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
        <div class="flex justify-center flex-1">
          <Button size="lg">Hubungi Kami</Button>
        </div>
      </div>
    </div>

    <!-- Berita -->
    <div class="relative flex justify-center py-10 bg-primary-grad bg-red-ruby">
      <div class="absolute top-0 left-0 z-[1] w-full h-full bg-black clip-4" />

      <div class="w-full max-w-screen-lg z-[2]">
        <div class="text-4xl font-bold text-center text-white">Berita</div>
        <div class="grid grid-cols-3 gap-10 mt-10">
          <NewsCard v-for="item in newsList" :key="item" :data="item" />
        </div>
      </div>
    </div>

    <div class="relative flex justify-end">
      <div class="absolute z-[2] top-0 left-0 w-full h-full bg-black clip-2">
        <img src="/img/bg-1.jpeg" class="w-2/3 h-full object-cover bg-left" />
      </div>
      <div class="w-2/3 static z-[1]">
        <Map />
      </div>
    </div>

    <div class="relative flex justify-end overflow-hidden bg-black w-full h-[700px]">
      <TestimonialImage :items="testimonials" />
      <div class="flex justify-center w-full h-full clip-1 bg-black absolute z-[2]">
        <div class="flex justify-end flex-1 max-w-screen-lg">
          <div class="w-1/3 flex items-center justify-center">
            <Testimonial :items="testimonials" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.clip-1 {
  clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%);
}
.clip-2 {
  clip-path: polygon(0% 0%, 35% 0%, 60% 100%, 0% 100%);
}
.clip-3 {
  clip-path: polygon(0% 0%, 35% 0%, 60% 100%, 0% 100%);
}
.clip-4 {
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>
