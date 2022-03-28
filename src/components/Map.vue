<script setup lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';

const API_KEY = import.meta.env.VITE_MAPBOX_API_KEY as string

mapboxgl.accessToken = API_KEY || ''
globalThis.mapboxgl = mapboxgl

onMounted(() => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [106.816666, -6.2088],
        zoom: 13
    });

    const marker = new mapboxgl
        .Marker({
            scale: 2
        })
        .setLngLat([106.816666, -6.2088])
        .addTo(map)
})

</script>

<template>
    <div class="bg-white">
        <div id="map" class="h-[400px] w-full map" />
    </div>
</template>