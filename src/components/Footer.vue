<script setup lang="ts">
// @ts-ignore
import Map from "../components/Map.vue";
</script>

<template>
  <div class="w-full justify-center items-center text-secondary text-center mt-2 md:mt-8">
    <h1 class="text-4xl font-bold">Kontak</h1>
    <div
      class="flex flex-col w-full md:flex-row justify-center gap-4 md:gap-16 align-middle items-center md:items-start">
      <img src="/img/foto2.jpg" class="mt-8 h-40 w-40 md:h-52 md:w-52 mb-4 rounded-full" />
      <div class="mb-8 my-auto text-center md:text-left">
        <h3 class="text-2xl font-bold">Susi Rahim</h3>
        <h3 class="text-xl">Marketer Mitsubishi Jakarta </h3>
        <div
          class="flex text-secondary text-base sm:text-lg flex-col items-center md:items-start justify-around mt-4 gap-2">
          <a href="tel:0215709057" class="flex items-center gap-3 hover:font-bold">
            <img src="/img/phone.png" class="w-7 h-7" />
            <span>021-570 9057</span>
          </a>
          <a href="mailto:susilila168@gmail.com" class="flex items-center gap-3 mt-0 hover:font-bold">
            <img src="/img/gmail.png" class="w-7 h-7" />
            <span>susilila168@gmail.com</span>
          </a>
          <a href="https://wa.me/6281290671767?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil" target="__blank"
            class="flex items-center gap-3 mt-0 hover:font-bold">
            <img src="/img/whatsapp.png" class="w-7 h-7" />
            <span>+62 812 906 717 67</span>
          </a>
        </div>
      </div>
    </div>
    <div class="text-lg sm:text-xl font-bold text-center text-secondary">
      Alamat Dealer
    </div>
    <div class="mt-1 mx-2 mb-4 text-sm sm:text-lg text-center text-secondary">
      Jalan Gatot Subroto No.Kav.50-52, Petamburan, Kec. Tanah Abang, Jakarta Pusat 10260
    </div>
    <div class="relative flex justify-end bg-white">
      <div class="w-full static z-[1]">
        <a href="https://www.google.com/maps/place/Mitsubishi+DIPO+Slipi+Gatot+Subroto/@-6.2028699,106.7997685,15.9z/data=!4m5!3m4!1s0x2e69f79e50f8af2d:0xc86ce89d3f24d675!8m2!3d-6.2032859!4d106.8012544"
          target="_blank">
          <Map />
        </a>
      </div>
    </div>
  </div>
  <div
    class="fixed bottom-0 left-0 z-20 flex items-center justify-center w-full px-4 py-4 border-t-4 md:border-accent md:border-0 bg-secondary md:bg-transparent md:px-0 mt-14 md:mt-0 md:w-fit md:invisible">
    <div class="flex flex-row items-center justify-around w-full md:flex-col">
      <a href="tel:0215709057" class="flex items-center gap-3">
        <img src="/img/phone.png" class="w-7 h-7" />
        <span class="hidden text-sm text-white md:block">021-570 9057</span>
      </a>
      <a href="mailto:susilila168@gmail.com" class="flex items-center gap-3 mt-0 md:mt-3">
        <img src="/img/gmail.png" class="w-7 h-7" />
        <span class="hidden text-sm text-white md:block">susilila168@gmail.com</span>
      </a>
      <a href="https://wa.me/6281290671767?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil" target="__blank"
        class="flex items-center gap-3 mt-0 md:mt-3">
        <img src="/img/whatsapp.png" class="w-7 h-7" />
        <span class="hidden text-sm text-white md:block">+62 812 906 717 67</span>
      </a>
    </div>
  </div>
  <div class="flex flex-col justify-center py-6 sm:pb-4 bg-secondary border-t-8 !border-accent">
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
    <button class="z-10 flex pointer fixed w-[9rem] h-[5.7rem] bg-green-500 shadow-lg bottom-24 right-16"
      style="border-radius: 50%">
      <img src="/img/whatsapp.png" class="z-10 pointer w-8 h-8 my-auto ml-4" />
      <p class="z-10 text-primary font-bold uppercase my-auto mr-2">Hubungi Kami</p>
    </button>
  </a>
</template>
