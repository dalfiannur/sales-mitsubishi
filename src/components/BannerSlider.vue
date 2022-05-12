<script lang="ts" setup>
import { onMounted, ref } from "vue";
import useGetBanners from "../composable/useGetBanners";

const { data: items } = useGetBanners();
const current = ref<number>(0);
const selected = ref<number | null>(null);
const status = ref<string>("enter");

let run = true;
let runners: NodeJS.Timer[] = [];

const createRunner = () => {
  runners.length = 0;
  if (run) {
    status.value = "enter";

    const r1 = setTimeout(() => {
      status.value = "enter-active";
    }, 1000);

    const r2 = setTimeout(() => {
      status.value = "leave";
    }, 4000);

    const r3 = setTimeout(() => {
      status.value = "leave-active";
    }, 4500);

    const r4 = setTimeout(() => {
      if (current.value < 4) {
        current.value = current.value + 1;
      } else {
        current.value = 0;
      }
    }, 5500);

    const r5 = setTimeout(() => {
      createRunner();
    }, 6000);

    runners.push(...[r1, r2, r3, r4, r5]);
  }
};
const onClick = (index: number) => {
  runners.every((item) => {
    clearTimeout(item);
  });

  if (current.value === index) {
    status.value = "leave";
  } else if (selected.value === null) {
    selected.value = index;
    run = false;
  } else if (selected.value === index) {
    selected.value = null;
    run = true;
    createRunner();
  }
};

onMounted(() => {
  createRunner();
});
</script>

<template>
  <div class="relative hidden banner__wrapper md:block">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="banner__item"
      :class="{
        'banner-enter': index === current && status === 'enter',
        'banner-enter-active': index === current && status === 'enter-active',
        'banner-leave': index === current && status === 'leave',
        'banner-selected': index === selected,
      }"
      :data-id="index"
    >
      <img
        class="object-cover w-full h-full cursor-pointer"
        :src="item.imageSourceUrl"
        :alt="item.imageSourceUrl"
        @click="onClick(index)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    height: 590px;
    width: 100%;
  }

  &__item {
    position: absolute;
    height: 100%;
    width: 20%;
    z-index: 1;
    transition: all 1s;
  }

  @for $i from 0 through 4 {
    &__item[data-id="#{$i}"] {
      left: $i * 20%;
    }
  }

  &-enter {
    z-index: 2 !important;
  }

  &-enter-active {
    z-index: 2 !important;
    left: 0 !important;
    width: 100% !important;
  }

  &-leave {
    z-index: 2 !important;
  }

  &-leave-active {
    z-index: 2 !important;
  }

  &-selected {
    z-index: 3 !important;
    width: 100% !important;
    left: 0 !important;
  }
}
</style>
