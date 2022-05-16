<script setup lang="ts">
// @ts-ignore
import Map from "../components/Map.vue";
</script>

<template>
  

  <div class="flex flex-col justify-center py-10 bg-secondary border-t-8 !border-accent">
    <div class="flex flex-col justify-between w-full px-2 md:px-28 m-auto">
      <div class="w-full">
        <div class="flex items-center justify-center gap-5">
          <div class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
            <img class="object-cover w-full" src="/img/logo.png" />
          </div>
          <h2 class="text-lg md:text-xl font-bold text-white">
            <span class="whitespace-nowrap">PT. DIPO INTERNASIONAL</span>
            <br />PAHALA OTOMOTIF
          </h2>
        </div>
      </div>
      <div class="flex justify-center pt-4 px-4 pb-12 md:pb-0">
        <div class="flex flex-col items-center justify-center text-white w-fit">
          <p class="text-sm text-right">Copyright &copy; 2022</p>
          <p class="text-sm">Supported by Enterprise</p>
        </div>
      </div>
    </div>
  </div>

  <a class="z-10 pointer" href="https://wa.me/6281290671767?text=Hallo,%20Saya%20mau%20bertanya%20tentang%20mobil">
    <button
      class="z-10 flex gap-5 px-5 pointer fixed h-[4rem] bg-green-500 shadow-lg bottom-24 right-16 rounded-l-[4rem] rounded-r-[4rem]">
      <img src="/img/whatsapp.png" class="z-10 pointer w-8 h-8 my-auto ml-4" />
      <p class="z-10 text-primary font-bold uppercase my-auto mr-2 whitespace-nowrap">Hubungi Kami</p>
    </button>
  </a>
</template>
