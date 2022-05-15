<template>
  <div class="w-full justify-center items-center text-secondary text-center mt-8 mb-12">
    <h1 class="text-4xl font-bold">Kontak</h1>
    <div class="flex flex-row justify-center gap-16 align-middle">
      <img src="/img/foto2.jpg" class="mt-8 h-52 mb-4 rounded-full border-secondary" />
      <div class="mb-8 my-auto text-left">
        <h3 class="text-2xl font-bold">Susi Rahim</h3>
        <h3 class="text-lg">Marketer Mitsubishi Jakarta </h3>
        <div class="flex text-secondary text-base flex-col items-left justify-around mt-4 gap-2">
          <a href="tel:0215709057" class="flex items-center gap-3 hover:font-bold">
            <img src="/img/phone.png" class="w-7 h-7" />
            <span>021-570 9057</span>
          </a>
          <a href="mail:susilila168@gmail.com" class="flex items-center gap-3 mt-0 hover:font-bold">
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
  </div>
  <div
    class="fixed bottom-0 left-0 z-20 flex items-center justify-center w-full px-4 py-4 border-t-4 md:border-accent md:border-0 bg-secondary md:bg-transparent md:px-0 mt-14 md:mt-0 md:w-fit md:invisible">
    <div class="flex flex-row items-center justify-around w-full md:flex-col">
      <a href="tel:0215709057" class="flex items-center gap-3">
        <img src="/img/phone.png" class="w-7 h-7" />
        <span class="hidden text-sm text-white md:block">021-570 9057</span>
      </a>
      <a href="mail:susilila168@gmail.com" class="flex items-center gap-3 mt-0 md:mt-3">
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
  <div class="flex flex-col justify-center py-10 md:py-20 sm:pb-4 bg-secondary border-t-8 !border-accent">
    <div class="flex flex-col justify-between w-full max-w-screen-lg md:flex-row m-auto">
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
        <div class="pl-0 mt-10 ml-0 text-sm text-center text-white md:pl-16 md:mt-5 md:ml-5 md:text-left">
          Jln. Gatot Subroto No.Kav 50-52,
          <br /> (Samping Gedung Dipo Tower Slipi), <br />Jakarta Pusat - 10260 Indonesia
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
