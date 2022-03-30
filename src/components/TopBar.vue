<script lang="ts" setup>
type NavigatorLink = {
    text: string;
    path: string;
}

const navigatorLinks: NavigatorLink[] = [
    {
        text: 'Beranda',
        path: '/'
    },
    {
        text: 'Produk',
        path: '/produk'
    },
    {
        text: 'Ajukan Kredit',
        path: '/ajukan-kredit'
    },
    {
        text: 'Tukar Tambah',
        path: '/tukar-tambah'
    },
    {
        text: 'Berita',
        path: '/berita'
    }
]
</script>

<template>
    <div class="fixed top-0 z-30 flex justify-center w-full bg-black border-b-8 border-orange-500">
        <div class="flex items-center justify-between w-full h-16 max-w-screen-xl px-10">
            <div class="flex items-center gap-5">
                <img src="/img/logo.png" class="h-12" />
                <h1 class="text-xl font-bold text-white uppercase">Mitsubishi</h1>
            </div>

            <div>
                <ul class="flex gap-5">
                    <li v-for="link in navigatorLinks" :key="link.text">
                        <a :href="link.path" @click.prevent="$router.push(link.path)" class="font-bold text-white">
                            {{ link.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-grad {
    background: linear-gradient(56deg, rgba(98,0,0,1) 100%, rgba(185,0,0,1) 0%, rgba(255,0,0,1) 0%);
}
</style>