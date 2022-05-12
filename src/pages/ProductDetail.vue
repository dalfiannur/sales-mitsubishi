<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useMeta from "../composable/useMeta";
import Button from "../components/Button.vue";
import useEntityGetter from "../composable/useEntityGetter";
import { Product } from "../typings/Product";
import ProductCard from "../components/ProductCard.vue";
import usePaginationGetter from "../composable/usePaginationGetter";

const slug = ref<string>("");
const selectedVariant = ref<number>(0);
const selectedImage = ref<string>("");
const route = useRoute();

const { fetcher, data } = useEntityGetter<Product>(route.params.slug as string, {
  path: "products",
  autoFetch: true,
});

const { data: products } = usePaginationGetter<Product>({
  path: "products",
  perPage: 3,
  autoFetch: true,
});

const generateWhatsappText = (type: any) => {
  const query = new URLSearchParams();
  query.set(
    "text",
    `Hallo, saya mau bertanya tentang ${data.value?.name} tipe ${type.name}`
  );
  return "https://wa.me/6281280438004?" + query.toString();
};

useMeta({
  title: "Produk",
});

onMounted(() => {
  slug.value = route.params.slug as string;
});

watch(slug, (val) => {
  if (val) {
    fetcher(val);
  }
});

watch(data, (val) => {
  if (val) {
    selectedImage.value = val.images[0].source_url;
  }
});
</script>

<template>
  <div v-if="data" class="flex justify-center py-5 bg-primary">
    <div class="w-full max-w-screen-lg">
      <div class="mt-5 flex flex-col md:flex-row gap-10">
        <div class="flex-1">
          <div class="flex-1">
            <img :src="selectedImage" class="w-full" />
          </div>
          <div class="flex-1 grid grid-cols-4 gap-3 h-fit p-3 md:p-0">
            <div
              v-for="image in data.images"
              :key="image.id"
              class="border rounded shadow w-fell"
              :class="{
                'bg-accent border-4': image.source_url === selectedImage,
              }"
            >
              <img
                class="w-full cursor-pointer"
                :src="image.source_url"
                @click="selectedImage = image.source_url"
              />
            </div>
          </div>
        </div>

        <div class="flex-1 px-5 md:px-0">
          <div class="flex-1">
            <h1 class="font-bold text-3xl text-center md:text-left border-b pb-5">
              {{ data.name }}
            </h1>
            <p class="indent-8 mt-5">{{ data.description }}</p>
          </div>
          <p class="mt-10 text-xs">Harga Mulai</p>
          <p class="font-semibold text-4xl text-red-500">
            Rp. {{ Intl.NumberFormat("ID-id").format(data.types[selectedVariant].price) }}
          </p>
          <div class="flex-1 flex flex-wrap gap-5 mt-10">
            <div
              v-for="(type, index) in data.types" :key="index"
              class="border rounded-full shadow-lg bg-white hover:bg-gray-100 px-3 py-2 whitespace-nowrap cursor-pointer"
              :class="{
                'border-red-500': selectedVariant === index,
              }"
              @click="selectedVariant = index"
            >
              {{ type.name }}
            </div>
          </div>
          <div class="mt-10 flex justify-end gap-5 px-10">
            <a href="https://wa.me/6281290671767?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil"><Button>Hubungi Kami</Button></a>
            <a href="https://wa.me/6281290671767?text=Hai,%20saya%20ingin%20mengajukan%20kredit"><Button>Ajukan Kredit</Button></a>
          </div>
        </div>
      </div>

      <div class="mt-24 px-5">
        <h4 class="text-xl font-bold">Produk Lainnya</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <ProductCard v-for="item in products" :key="item.slug" :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
