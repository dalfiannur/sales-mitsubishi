<script setup lang="ts">
import useMeta from "../composable/useMeta";
import useGetProducts from "../composable/useGetProducts";
import ProductCard from "../components/ProductCard.vue";

useMeta({
  title: "Produk",
});

const { data: items } = useGetProducts({ page: 1, perPage: 9 });
</script>
<template>
  <div>
    <div
      id="produk"
      class="relative flex flex-col items-center justify-center pt-10 pb-10 bg-red-ruby"
    >
      <div class="absolute z-[1] top-0 left-0 clip-3 h-full w-full bg-black" />
      <div class="grid w-full max-w-screen-lg grid-cols-3 gap-10 mt-10 static z-[2]">
        <ProductCard v-for="item in items" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-3 {
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>
