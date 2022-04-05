<script lang="ts" setup>
import { onMounted, ref, toRefs } from "vue";
import { Testimonial } from "../typings/Testimonial";

interface Prop {
  items: Testimonial[];
}

const current = ref<number>(0);
const props = defineProps<Prop>();

const { items } = toRefs(props);

onMounted(() => {
  setInterval(() => {
    if (current.value < 1) {
      current.value = current.value + 1;
    } else {
      current.value = 0;
    }
  }, 6000);
});
</script>

<template>
  <div class="relative md:absolute md:left-0 w-full md:w-2/3 h-[700px]">
    <Transition name="slide-fade" v-for="(item, index) in items">
      <img
        v-show="current === index"
        class="h-full w-full object-cover absolute top-0 left-0 z-[1]"
        :src="item.image"
      />
    </Transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
