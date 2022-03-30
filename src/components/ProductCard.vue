<script setup lang="ts">
import Button from "../components/Button.vue";

type Prop = {
  data: any;
};

const props = defineProps<Prop>();

const { data } = props;
</script>

<template>
  <div
    class="overflow-hidden bg-white rounded shadow-lg hover:bg-gray-200 hover:shadow-xl"
  >
    <div class>
      <img
        class="object-cover w-full aspect-video cursor-pointer"
        :src="data.thumbnail"
        @click="$router.push('/produk/' + data.id)"
      />
    </div>

    <div>
      <h6 class="py-5 text-xl font-bold text-center">{{ data.name }}</h6>
      <div class="px-5 pb-5">
        <div class="flex justify-between">
          <div class="flex items-end justify-between">
            <div>
              <div class="font-semibold flex items-center gap-2 text-xs">
                <img src="/img/manual-transmission.png" class="w-4 h-4" />
                Automatic
              </div>
              <div class="font-semibold flex items-center gap-2 text-xs mt-2">
                <img src="/img/gas-station.png" class="w-4 h-4" />
                Pertamax
              </div>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <div class="font-bold text-xs">Mulai Dari</div>
            <div class="text-lg font-bold">Rp. {{ data.otr_price }}</div>
          </div>
        </div>
        <div class="flex justify-end mt-10">
          <Button size="sm">Hubungi Kami</Button>
        </div>
      </div>
    </div>
  </div>
</template>
