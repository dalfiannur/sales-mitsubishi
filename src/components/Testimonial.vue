<script setup lang="ts">
import { toRefs } from "vue";
import { Testimonial } from "../typings/Testimonial";

interface Prop {
  item: Testimonial;
}

const props = defineProps<Prop>();

const { item } = toRefs(props);
</script>

<template>
  <div
    class="overflow-hidden border shadow-lg rounded-xl h-[400px]"
    :style="{
      backgroundImage: `url(${item.imageUrl})`,
    }"
  >
    <div class="flex flex-col justify-between w-full h-full p-5 bg-black bg-opacity-60">
      <div class="flex gap-2">
        <div
          class="w-6 h-6 bg-yellow-500 star"
          v-for="star in [1, 2, 3, 4, 5]"
          :key="star"
        />
      </div>
      <div class="mt-10 font-bold text-white">{{ item.content }}</div>
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
