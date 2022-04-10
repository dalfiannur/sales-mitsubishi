<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Button from "./Button.vue";

const show = ref<boolean>(true);

type NavigatorLink = {
  text: string;
  path: string;
};

const navigatorLinks: NavigatorLink[] = [
  {
    text: "Beranda",
    path: "/",
  },
  {
    text: "Pengajuan Kredit",
    path: "/ajukan-kredit",
  },
  {
    text: "Berita",
    path: "/berita",
  },
];

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
  <div
    class="fixed top-0 z-30 flex justify-center w-full bg-secondary border-b-8 border-accent"
  >
    <div
      class="relative flex items-center justify-between w-full h-16 max-w-screen-xl px-4 md:px-10"
    >
      <a href="/" @click.prevent="$router.push('/')" class="flex items-center gap-5">
        <img src="/img/logo.png" class="h-12" />
        <h1 class="text-xl font-bold text-white uppercase">Mitsubishi</h1>
      </a>

      <div>
        <Button class="block md:hidden" @click="show = !show">Menu</Button>
        <Transition name="slide-fade">
          <div
            v-show="show"
            class="absolute left-0 w-full gap-5 p-4 shadow md:relative bg-primary md:bg-transparent top-16 md:top-0"
          >
            <ul class="flex flex-col gap-5 md:flex-row">
              <li v-for="link in navigatorLinks" :key="link.text">
                <a
                  :href="link.path"
                  @click.prevent="$router.push(link.path)"
                  class="font-semibold text-white"
                  >{{ link.text }}</a
                >
              </li>
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
