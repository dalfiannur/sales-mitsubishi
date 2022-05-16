<script lang="ts" setup>
import usePaginationGetter from '../composable/usePaginationGetter';
import { Testimonial } from '../typings/Testimonial';
import TestimonialCard from "../components/Testimonial.vue";
import Slider from './Slider'

const { data: testimonials } = usePaginationGetter<Testimonial>({
  path: "testimonials",
  perPage: 10,
  autoFetch: true,
});

const options = {
  gap: 30,
  perView: 5,
  hasArrows :true,
  hasBullet: true,
  breakpoints: {
    600: {
      perView: 1
    },
    800: {
      perView: 3
    },
    1200: {
      perView: 5
    }
  }
}

</script>
<template>
  <div class="w-full py-10 bg-primary">
    <h5 class="text-4xl font-bold text-center text-secondary">Testimoni Pelanggan</h5>
    <div class="flex justify-center gap-5 mt-10">
      <div class="w-full px-8 md:px-20">
        <Slider id="testimonial-carousel" :items="testimonials" :options="options">
          <template #item="{ item, classes }">
            <li :class="classes">
              <TestimonialCard :item="item" />
            </li>
          </template>
        </Slider>
      </div>
    </div>
  </div>
</template>