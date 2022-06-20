<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useMeta from "../composable/useMeta";
import Button from "../components/Button.vue";
import useEntityGetter from "../composable/useEntityGetter";
import { Product } from "../typings/Product";
import ProductCard from "../components/ProductCard.vue";
import usePaginationGetter from "../composable/usePaginationGetter";
import Map from '../components/Map.vue'

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
            <a href="https://wa.me/6281290671767?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil" target="__blank"><Button>Hubungi Kami</Button></a>
            <a href="https://wa.me/6281290671767?text=Hai,%20saya%20ingin%20mengajukan%20kredit" target="__blank"><Button>Ajukan Kredit</Button></a>
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
  <!-- <div id="kontak" class="grid grid-cols-3 p-5 gap-5">
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

            <div class="mt-10 text-sm">
              Jalan Gatot Subroto No.Kav.50-52, Petamburan, Kec. Tanah Abang, Jakarta Pusat 10260 
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 col-span-2">
        <div class="border rounded-lg overflow-hidden">
          <Map />
        </div>
      </div>
    </div> -->
</template>
