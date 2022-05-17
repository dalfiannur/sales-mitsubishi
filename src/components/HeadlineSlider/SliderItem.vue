<script setup lang="ts">
import { defineProps, computed, toRefs } from 'vue'
// @ts-ignore
import Button from "../../components/Button.vue";
// @ts-ignore
import { HeadlineBanner } from '../../typings/HeadlineBanner'

interface Prop {
    data: HeadlineBanner;
    currentSlide: number;
    index: number;
    direction: string;
}

const props = defineProps<Prop>();

const { direction, data } = toRefs(props);

const transitionEffect = computed(() => {
    return direction.value === 'right' ? 'slide-out' : 'slide-in'
})
</script>

<template>
    <transition :name="transitionEffect">
        <div class="w-full h-full absolute bg-no-repeat bg-top bg-cover"
            :style="{ 'background-image': `url(${data.imageSource})` }" v-show="currentSlide === index">
            <div class="pt-10 h-full bg-secondary bg-opacity-60 flex justify-center items-center">
                <div class="w-full flex flex-col items-start mx-10 sm:mx-20 lg:mx-32">
                    <div class="w-full md:w-[680px] lg:w-[800px]">
                        <div class="text-5xl sm:text-6xl font-bold text-white">
                            {{ data.title }}
                        </div>
                        <div class="mt-5 text-lg sm:text-xl font-bold text-yellow-500">
                            {{ data.subTitle }}
                        </div>
                        <div class="text-2xl sm:text-3xl font-bold text-yellow-500">
                            {{ data.subTitle2 }}
                        </div>
                    </div>
                    <div class="flex justify-center flex-1 mt-12">
                        <Button tag="a" :href="data.buttonLink" target="_blank" size="lg">Hubungi Kami</Button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}

.slide-in-enter-from {
    transform: translateX(-100%);
}

.slide-in-leave-to {
    transform: translateX(100%);
}

.slide-out-enter-from {
    transform: translateX(100%);
}

.slide-out-leave-to {
    transform: translateX(-100%);
}
</style>