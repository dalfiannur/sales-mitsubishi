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
      class="relative flex flex-col items-center justify-center pt-10 pb-10 bg-primary"
    >
      <div class="absolute z-[1] top-0 left-0 clip-3 h-full w-full bg-secondary" />
      <div
        class="flex items-end justify-between w-full max-w-screen-lg static z-[2] px-4 md:px-0"
      >
        <div>
          <h5 class="text-3xl font-bold text-white">Produk Kami</h5>
        </div>
        <div>
          <Button @click="$router.push('/produk')">Lainnya</Button>
        </div>
      </div>
      <div
        class="grid w-full max-w-screen-lg grid-cols-1 md:grid-cols-3 gap-10 mt-10 static z-[2] px-5 md:px-0"
      >
        <ProductCard v-for="item in products" :key="item.name" :data="item" />
      </div>
    </div>

    <div
      class="pt-10 h-[590px] bg-secondary bg-opacity-60 flex justify-center items-center"
    >
      <div
        class="flex flex-col items-center justify-between w-full max-w-screen-lg md:flex-row"
      >
        <div class="w-full md:w-[600px] px-4 md:px-0">
          <div class="text-xl font-bold text-primary">Promo</div>
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
          <Button
            tag="a"
            href="https://wa.me/6281280438004?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil"
            target="_blank"
            size="lg"
            >Hubungi Kami</Button
          >
        </div>
      </div>
    </div>

    <!-- Berita -->
    <div class="relative flex justify-center py-10 bg-primary-grad bg-primary">
      <div class="absolute top-0 left-0 z-[1] w-full h-full bg-secondary clip-4" />

      <div class="w-full max-w-screen-lg z-[2] px-4 md:px-0">
        <div class="text-4xl font-bold text-center text-white">Berita</div>
        <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
          <NewsCard v-for="item in newsList" :key="item" :data="item" />
        </div>
      </div>
    </div>

    <div class="relative flex justify-end">
      <div
        class="absolute z-[2] top-0 left-0 w-full h-full bg-primary clip-2 hidden md:block"
      >
        <img src="/img/bg-1.jpeg" class="object-cover w-2/3 h-full bg-left" />
      </div>
      <div class="w-full md:w-2/3 static z-[1]">
        <Map />
      </div>
    </div>

    <div
      class="relative flex flex-col md:flex-row justify-end overflow-hidden bg-primary w-full h-fit md:h-[700px]"
    >
      <TestimonialImage :items="testimonials" />
      <div
        class="flex justify-center w-full h-full clip-1 bg-primary relative md:absolute z-[2]"
      >
        <div class="flex justify-end flex-1 max-w-screen-lg">
          <div class="flex items-center justify-center w-full px-4 md:w-1/3 md:px-0">
            <Testimonial :items="testimonials" />
          </div>
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
.clip-3 {
  clip-path: polygon(0% 0%, 35% 0%, 60% 100%, 0% 100%);
}
.clip-4 {
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>
