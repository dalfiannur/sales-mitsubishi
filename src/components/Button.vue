<script lang="ts" setup>
import { reactive } from 'vue'

type Prop = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
const props = withDefaults(defineProps<Prop>(), {
    size: 'md'
})

const { size } = props

const classes = reactive({
    'px-2 py-2 text-sm': size === 'sm',
    'px-4 py-2': size === 'md',
    'px-4 py-3 text-lg': size === 'lg'
})
</script>

<template>
    <button class="block rounded btn-grad" :class="classes">
        <slot />
    </button>
</template>

<style>
.btn-grad {
    background-image: linear-gradient(
        to right,
        #e2330f 0%,
        #db4371 51%,
        #d12401 100%
    );
}
.btn-grad {
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 10px #eee5;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
</style>