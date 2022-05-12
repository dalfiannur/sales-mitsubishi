<script lang="ts" setup>
import { onMounted, toRefs } from 'vue';

import Glide from '@glidejs/glide';

type Prop = {
  id: string;
  items: any[]
  options?: {
    gap?: number;
    perView?: number,
    hasArrows?: boolean,
    hasBullet?: boolean,
    breakpoints?: Record<number, Glide.Options>
  }
}

const props = defineProps<Prop>()
const { id, items, options } = toRefs(props);

onMounted(() => {
  const init = () => {
    const el = document.querySelector('#' + id.value)
    if (el && items.value.length > 0) {
      console.log(options?.value?.breakpoints)
      new Glide('#' + id.value, {
        type: 'carousel',
        startAt: 0,
        perView: options?.value?.perView ?? 3,
        gap: options?.value?.gap ?? 40,
        autoplay: 3000,
        breakpoints: options?.value?.breakpoints,
      }).mount()
    } else {
      setTimeout(() => {
        init()
      }, 100)
    }
  }

  init()
})
</script>

<template>
  <div :id="id" class="glide">
    <div class=" glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <template v-for="(item, index) in items" :key="id + index">
          <slot name="item" :item="item" :classes='"glide__slide"' />
        </template>
      </ul>
    </div>

    <div v-if="options?.hasArrows" class="glide__arrows" data-glide-el="controls">
      <button class="font-bold text-xl glide__arrow glide__arrow--left !left-2 md:!left-[-3.75rem] !bg-secondary" data-glide-dir="<">&#60;</button>
      <button class="font-bold text-xl glide__arrow glide__arrow--right !right-2 md:!right-[-3.75rem] !bg-secondary" data-glide-dir=">">&#62;</button>
    </div>

    <div v-if="options?.hasBullet" class="!-bottom-5 glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
  </div>
</template>
