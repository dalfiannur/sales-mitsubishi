<script lang="ts" setup>
import usePaginationGetter from '../composable/usePaginationGetter';
import ProductCard from "../components/ProductCard.vue";
import Button from "../components/Button.vue";
import { Product } from '../typings/Product';
import Slider from './Slider';

const { data: products, perPage, setPerPage } = usePaginationGetter<Product>({
  path: "products",
  perPage: 3,
  autoFetch: true,
});

const options = {
  gap: 30,
  perView: 3,
  hasBullet: true,
  hasArrows: true,
  breakpoints: {
    600: {
      perView: 1
    },
    800: {
      perView: 2
    },
    1200: {
      perView: 3
    }
  }
}

const loadMoreProduct = () => {
  setPerPage(perPage.value + 3);
};
</script>

<template>
  <div id="produk" class="relative flex flex-col items-center justify-center pt-10 pb-10 bg-primary">
    <div class="absolute z-[1] top-0 left-0 clip-3 h-full w-full bg-secondary" />
    <div class="flex items-end justify-between w-full max-w-screen-lg static z-[2] px-4">
      <div>
        <h5 class="text-3xl font-bold text-white">Produk Kami</h5>
      </div>
    </div>
    <div class="z-10 w-full max-w-screen-lg px-5 mt-10">
      <Slider id="product-slider" :items="products" :options="options">
        <template #item="{ item, classes }">
          <li :class="classes">
            <ProductCard :data="item" />
          </li>
        </template>
      </Slider>
    </div>
    <div class="z-[10] mt-10">
      <Button @click="loadMoreProduct">Tampilkan Lebih Banyak</Button>
    </div>
  </div>
</template>

<style scoped>
.clip-3 {
  clip-path: polygon(0% 0%, 35% 0%, 60% 100%, 0% 100%);
}
</style>