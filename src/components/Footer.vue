<template>
  <div
    class="flex justify-center py-10 md:py-20 sm:pb-4 bg-secondary border-t-8 !border-accent"
  >
    <div class="flex flex-col justify-between w-full max-w-screen-lg md:flex-row">
      <div class="w-full md:w-fit">
        <div class="flex items-center justify-center gap-5 md:justify-start">
          <div class="flex items-center justify-center w-16 h-16">
            <img class="object-cover w-full" src="/img/logo.png" />
          </div>
          <h2 class="text-xl font-bold text-white sm:w-fit md:flex-1">
            <span class="whitespace-nowrap">PT. DIPO INTERNASIONAL</span>
            <br />PAHALA OTOMOTIF
          </h2>
        </div>
        <div
          class="pl-0 mt-10 ml-0 text-sm text-center text-white md:pl-16 md:mt-5 md:ml-5 md:text-left"
        >
          Jl. Sisingamangaraja Km.7 No.34,
          <br />Medan Amplas, Harjosari II, Medan, <br />Sumatera Utara - 20147 Indonesia
        </div>
      </div>
      <div
        class="fixed bottom-0 left-0 z-20 flex items-center justify-center w-full px-4 py-4 border-t-4 md:border-accent md:border-0 bg-secondary md:bg-transparent md:px-0 mt-14 md:mt-0 md:w-fit md:relative"
      >
        <div class="flex flex-row items-center justify-around w-full md:flex-col">
          <a href="tel:+62617866868" class="flex items-center gap-3">
            <img src="/img/phone.png" class="w-5 h-5" />
            <span class="hidden text-sm text-white md:block">+62 617 866 868</span>
          </a>
          <a
            href="https://wa.me/6281280438004?text=Hallo,%20saya%20mau%20bertanya%20tentang%20mobil"
            target="__blank"
            class="flex items-center gap-3 mt-0 md:mt-3"
          >
            <img src="/img/whatsapp.png" class="w-5 h-5" />
            <span class="hidden text-sm text-white md:block">+62 617 866 868</span>
          </a>
          <a href="mail:git@sbmgrp.com" class="flex items-center gap-3 mt-0 md:mt-3">
            <img src="/img/gmail.png" class="w-5 h-5" />
            <span class="hidden text-sm text-white md:block">git@sbmgrp.com</span>
          </a>
        </div>
      </div>
      <div class="flex justify-center px-4 my-10 md:my-0 md:mt-0 md:px-0">
        <div class="flex flex-col items-center justify-end text-white md:items-end w-fit">
          <p class="text-sm text-right">Copyright &copy; 2022</p>
          <p class="mt-5 text-xs">Supported by</p>
          <a href="#" class="text-xs uppercase">Padjajaran Technology</a>
        </div>
      </div>
    </div>
  </div>
</template>
