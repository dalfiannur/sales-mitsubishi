<script setup lang="ts">
import { onUpdated, toRefs } from "vue";
import { gsap } from "gsap";
import { Testimonial } from "../typings/Testimonial";

interface Prop {
  items: Testimonial[];
}

const props = defineProps<Prop>();

const { items } = toRefs(props);

const loop = (targets: (index: number) => Element, i = 0) => {
  gsap
    .timeline()
    .fromTo(
      targets(i),
      {
        xPercent: 102,
        opacity: 1,
      },
      {
        xPercent: 0,
        duration: 1,
      }
    )
    .to(targets(i), {
      opacity: 0,
      duration: 1,
      delay: 4,
      onComplete() {
        loop(targets, i + 1);
      },
    });
};

onUpdated(() => {
  const targets = gsap.utils.wrap<Element>(gsap.utils.toArray(".testimonial-item"));
  gsap.set(".testimonial-item", {
    xPercent: 102,
  });

  loop(targets);
});
</script>

<template>
  <div class="relative w-full h-[700px] overflow-hidden">
    <div class="pb-10 mt-32">
      <h6 class="text-lg text-yellow-400">Testimonial</h6>
      <h5 class="text-4xl font-bold text-white">What They Say</h5>
    </div>
    <div
      class="absolute w-full p-5 bg-white shadow rounded-xl testimonial-item"
      v-for="item in items"
      :key="item.name"
    >
      <div class="flex gap-2">
        <div
          class="w-6 h-6 bg-yellow-500 star"
          v-for="star in [1, 2, 3, 4, 5]"
          :key="star"
        />
      </div>
      <div class="mt-10 font-bold text-gray-500">{{ item.content }}</div>
      <div class="relative flex gap-10 mt-10">
        <div>
          <img
            class="object-cover w-[80px] h-[80px] rounded-full"
            :src="item.avatarUrl"
          />
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-xl font-bold text-red-500">{{ item.name }}</p>
          <p class="text-sm font-bold text-yellow-500">{{ item.position }}</p>
        </div>
        <div
          class="absolute font-serif text-[100px] top-0 leading-[0] right-0 text-red-500"
        >
          &bdquo;
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.star {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
</style>
