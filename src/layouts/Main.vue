<script lang="ts" setup>
import TopBar from "../components/TopBar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="bg-primary">
    <TopBar />
    <div class="min-h-screen mt-[72px]">
      <slot />
    </div>
    <Footer />
  </div>
</template>
