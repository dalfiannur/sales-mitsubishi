<script setup lang="ts">
import useMeta from "../composable/useMeta";
import Button from "../components/Button.vue";
import ProductCard from "../components/ProductCard.vue";
import Map from "../components/Map.vue";
import TestimonialCard from "../components/Testimonial.vue";
import NewsCard from "../components/NewsCard.vue";
import usePaginationGetter from "../composable/usePaginationGetter";
import { Product } from "../typings/Product";
import { News } from "../typings/News";
import { Testimonial } from "../typings/Testimonial";
import { ref } from "vue";
//@ts-ignore
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

useMeta({
  title: "Homepage",
});

const productPerPage = ref<number>(3);
const carouselOptions = {
  settings: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 3.5,
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: "center",
    },
  },
};

const { data: products, setPerPage } = usePaginationGetter<Product>({
  path: "products",
  perPage: productPerPage.value,
  autoFetch: true,
});

const { data: newsList } = usePaginationGetter<News>({
  path: "news",
  perPage: 3,
  autoFetch: true,
});

const { data: testimonials } = usePaginationGetter<Testimonial>({
  path: "testimonials",
  perPage: 10,
  autoFetch: true,
});

const loadMoreProduct = () => {
  productPerPage.value = productPerPage.value + 3;
  setPerPage(productPerPage.value);
};
</script>

<template>
  <div
    class="bg-fixed bg-center bg-no-repeat bg-cover"
    style="background-image: url('/img/background.webp')"
  >
    <div
      class="pt-10 h-[720px] bg-secondary bg-opacity-60 flex justify-center items-center"
    >
      <div
        class="flex flex-col items-center justify-between w-full max-w-screen-lg md:flex-row"
      >
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
      </div>
      <div
        class="grid w-full max-w-screen-lg grid-cols-1 md:grid-cols-3 gap-10 mt-10 static z-[2] px-5 md:px-0"
      >
        <ProductCard v-for="item in products" :key="item.name" :data="item" />
      </div>
      <div class="z-[10] mt-10">
        <Button @click="loadMoreProduct">Tampilkan Lebih Banyak</Button>
      </div>
    </div>

    <!-- Berita -->
    <div class="relative flex justify-center py-10 bg-primary-grad bg-primary">
      <div class="absolute top-0 left-0 z-[1] w-full h-full bg-secondary clip-4" />

      <div class="w-full max-w-screen-lg z-[2] px-4 md:px-0">
        <div class="text-4xl font-bold text-center text-white">Berita</div>
        <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
          <NewsCard v-for="item in newsList" :key="item.slug" :data="item" />
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

    <div class="bg-primary w-full py-10">
      <h5 class="text-4xl font-bold text-center">Testimoni Pelanggan</h5>
      <div class="flex justify-center gap-5 mt-10">
        <div class="flex-1 max-w-screen-xl px-5">
          <Carousel
            :settings="carouselOptions.settings"
            :breakpoints="carouselOptions.breakpoints"
          >
            <Slide v-for="item in testimonials" :key="item.name">
              <div class="carousel__item">
                <TestimonialCard class="absolute top-0 h-full w-[90%]" :item="item" />
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  padding-top: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
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
