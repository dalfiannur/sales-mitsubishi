<script setup lang="ts">
import Button from '../components/Button.vue'

type Prop = {
    data: any
}

const props = defineProps<Prop>()

const { data } = props
</script>

<template>
    <div class="overflow-hidden bg-white rounded shadow-lg hover:bg-gray-200 hover:shadow-xl">
        <div class>
            <img class="object-cover w-full aspect-square cursor-pointer" :src="data.thumbnail" @click="$router.push('/produk/' + data.id)" />
        </div>

        <div>
            <h6 class="py-5 text-xl font-bold text-center">{{ data.title }}</h6>
            <div class="px-5 pb-5">
                <div class="flex items-center justify-between">
                    <div class="font-bold">OTR</div>
                    <div class="text-lg font-bold">Rp. {{ data.otr_price }}</div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="font-bold">OTR</div>
                    <div class="text-lg font-bold">Rp. 500.000.000</div>
                </div>
                <div class="flex items-end justify-between mt-10">
                    <div>
                        <div class="font-semibold">
                            <i class />
                            350 KM
                        </div>
                        <div class="font-semibold">
                            <i class />
                            Automatic
                        </div>
                        <div class="font-semibold">
                            <i class />
                            Pertamax
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <Button size="sm">Hubungi Kami</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>