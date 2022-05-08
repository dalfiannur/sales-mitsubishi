<script setup lang="ts">
import { defineEmits } from 'vue'
const emit = defineEmits(['prev', 'next'])
</script>

<template>
    <button class="top-1/2 pb-1 absolute left-2 sm:left-3 h-10 w-6 sm:w-10 border border-white text-white"
        @click="$emit('prev')">&lt</button>
    <button class="top-1/2 pb-1 absolute right-2 sm:right-3 h-10 w-6 sm:w-10 border border-white text-white"
        @click="$emit('next')">&gt</button>
</template>