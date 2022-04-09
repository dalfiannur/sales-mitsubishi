<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useMeta from "../composable/useMeta";
import Button from "../components/Button.vue";
import useEntityGetter from "../composable/useEntityGetter";
import { Product } from "../typings/Product";

const slug = ref<string>("");
const selectedImage = ref<string>("");
const route = useRoute();

const { fetcher, data } = useEntityGetter<Product>(route.params.slug as string, {
  path: "products",
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
      <div class="mt-5">
        <div class="flex flex-col md:flex-row gap-10">
          <div class="flex-1">
            <img :src="selectedImage" class="w-full" />
          </div>
          <div class="flex-1 grid grid-cols-3 gap-3 h-fit p-3 md:p-0">
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

        <div class="flex flex-col md:flex-row gap-10 mt-10">
          <div class="flex-1 grid grid-cols-1 md:px-0 px-5 md:grid-cols-2 gap-5">
            <div
              v-for="type in data.types"
              class="border rounded shadow-lg bg-accent p-5"
            >
              <p class="text-xl font-bold text-red-500">{{ type.name }}</p>
              <div class="flex flex-col items-end">
                <p class="text-xs mt-2">Mulai dari</p>
                <p class="text-2xl font-bold text-red-500">
                  Rp. {{ Intl.NumberFormat("ID-id").format(type.price) }}
                </p>
              </div>
              <div class="flex justify-between mt-4">
                <p>{{ type.transmission }}</p>
                <p>{{ type.fuel }}</p>
              </div>
              <div class="flex justify-center mt-5">
                <Button tag="a" :href="generateWhatsappText(type)">Hubungi Kami</Button>
              </div>
            </div>
          </div>

          <div class="flex-1">
            <h1 class="font-bold text-3xl text-center md:text-left text-accent">
              {{ data.name }}
            </h1>
            <p class="indent-8 mt-10">{{ data.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
