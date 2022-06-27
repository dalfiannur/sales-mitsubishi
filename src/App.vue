<script lang="ts" setup>
import Layout from './layouts/Main.vue'
</script>

<template>
  <Layout>
    <router-view :key="$route.path" />
  </Layout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 4em;
}
</style>