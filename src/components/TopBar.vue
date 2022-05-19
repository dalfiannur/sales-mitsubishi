<script lang="ts" setup>
import { onMounted, ref } from "vue";
// @ts-ignore
import Button from "./Button.vue";

const show = ref<boolean>(true);

type NavigatorLink = {
  text: string;
  path: string;
};

const baseUrl = window.location.origin

onMounted(() => {
  if (window.innerWidth > 768) {
    show.value = true;
  } else {
    show.value = false;
  }

  window.addEventListener("resize", () => {
    show.value = window.innerWidth > 768;
  });
});
</script>

<template>
  <div class="fixed top-0 z-30 flex justify-center w-full bg-secondary border-b-8 border-accent">
    <div class="relative flex items-center justify-between w-full h-20 ">
      <a href="/" @click.prevent="$router.push('/')" class="flex items-center gap-5 mx-6 md:mx-12 lg:mx-32">
        <img src="/img/logo.png" class="h-10" />
        <h1 class="text-xl font-bold text-white uppercase">Mitsubishi</h1>
      </a>
      <div>
        <Button class="block md:hidden mx-6 md:mx-12 lg:mx-32" @click="show = !show">Menu</Button>
        <Transition name="slide-fade ">
          <div v-show="show"
            class="absolute left-0 w-full gap-5 p-4 shadow md:relative bg-primary md:bg-transparent top-20 md:top-0 mr-0 md:mr-12 lg:mr-32">
            <ul class="flex flex-col gap-5 lg:gap-8 md:flex-row text-secondary md:text-white">
              <a :href="`${baseUrl}/#`" class="font-semibold ">Beranda</a>
              <a :href="`${baseUrl}/#produk`" class="font-semibold">Produk</a>
              <a :href="`${baseUrl}/#artikel`" class="font-semibold">Artikel</a>
              <a href="https://wa.me/6281290671767?text=Hai,%20Saya%20ingin%20mengajukan%20kredit" target="_blank"
                class="font-semibold">Pengajuan Kredit</a>
              <a :href="`${baseUrl}/#kontak`" class="font-semibold">Kontak</a>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
