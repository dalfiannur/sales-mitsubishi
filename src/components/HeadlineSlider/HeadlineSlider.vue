<script setup lang="ts">
import { ref, defineProps, toRefs, onBeforeUnmount, onMounted } from 'vue'
// @ts-ignore
import SliderItem from './SliderItem.vue';
// @ts-ignore
import SliderButton from './SliderButton.vue';
// @ts-ignore
import { HeadlineBanner } from '../../typings/HeadlineBanner'

interface Prop {
  items: HeadlineBanner[]
}

const props = defineProps<Prop>();
const { items } = toRefs(props);

const currentSlide = ref(0)
const slideInterval = ref<NodeJS.Timer>();
const direction = ref("right")
let isSliding = false;

function setCurrentSlide(index: number) {
  currentSlide.value = index
}

function prev() {
  if (isSliding != true) {
    const index = currentSlide.value > 0 ? currentSlide.value - 1 : items.value.length - 1
    setCurrentSlide(index)
    direction.value = "left"
    sliding()
    // startSlideTimer()
  }
}

function next() {
  if (isSliding != true) {
    console.log("hello")
    const index = currentSlide.value < items.value.length - 1 ? currentSlide.value + 1 : 0
    setCurrentSlide(index)
    direction.value = "right"
    sliding()
    startSlideTimer()
  }
}

function startSlideTimer() {
  stopSliderTimer()
  slideInterval.value = setInterval(() => {
    next()
  }, 6000)
}

function stopSliderTimer() {
  // @ts-ignore
  clearInterval(slideInterval.value)
}

function sliding() {
  isSliding = true;
  setTimeout(function () {
    isSliding = false;
  }, 1000);
}

onMounted(function () {
  // startSlideTimer()
})

onBeforeUnmount(function () {
  stopSliderTimer()
})

</script>

<template>
  <div class="flex justify-center">
    <div class="relative w-full h-[750px] overflow-hidden">
      <SliderItem v-for="(item, index) in items" :key="`slide-${index}`" :data=item :current-slide="currentSlide"
        :index="index" :direction="direction"></SliderItem>
      <SliderButton @prev="prev" @next="next"></SliderButton>
    </div>
  </div>
</template>

