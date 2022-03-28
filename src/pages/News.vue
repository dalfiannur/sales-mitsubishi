<script setup lang="ts">
import useGetNews from '../composable/useGetNews';
import useMeta from '../composable/useMeta';

useMeta({
    title: 'Berita'
})

const { data: news } = useGetNews({
    page: 1,
    perPage: 5
})

const getLink = (slug: any) => '/berita/' + slug 
</script>

<template>
    <div class="flex flex-col items-center py-12 relative bg-red-ruby">
        <div class="absolute w-full h-full top-0 left-0 bg-black z-[1] clip-3" />
        <div class="w-full max-w-screen-lg static z-[2]">
            <h2 class="text-3xl font-bold text-white">Berita</h2>

            <div class="flex gap-10 mt-10">
                <div class="flex flex-col flex-1 gap-5">
                    <div class="flex gap-5" v-for="item in news" :key="item.slug">
                        <div>
                            <img
                                class="rounded-lg w-72 aspect-video cursor-pointer"
                                :src="item.thumbnail"
                                @click="$router.push(getLink(item.id))"
                            />
                        </div>
                        <div class="p-2">
                            <div class="text-sm font-bold text-right text-white rounded-lg w-fit">
                                <span class="mr-2 underline">Terbit</span>
                                {{ item.createdAt }}
                            </div>
                            <div class="mt-2 text-xl text-white">
                                <a
                                    :href="getLink(item.id)"
                                    @click.prevent="$router.push(getLink(item.id))"
                                >{{ item.title }}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg w-72 h-fit">sdf</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.clip-3 {
    clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>