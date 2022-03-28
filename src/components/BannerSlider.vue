<script lang="ts" setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const items = [
    'https://images.unsplash.com/photo-1611396058741-1d570a4fcf95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1611396058754-a6b2562f0602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
    'https://images.unsplash.com/photo-1592399438478-4d4e2664a323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1611023924323-1e7e18f90c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    // 'https://images.unsplash.com/photo-1592399438478-4d4e2664a323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
]

const run = (targets: Element[], width: number) => {
    const fullWidth = width * 3
    gsap.timeline()
        .to(targets[0], {
            width: fullWidth,
            delay: (0 + 3) * 1,
            duration: 1
        })
        .to(targets[0], {
            width: width,
            duration: 1,
            delay: 2
        })
        .to(targets[1], {
            width: fullWidth,
            duration: 1,
            delay: 1
        })
        .to(targets[1], {
            width: width,
            delay: 2,
            duration: 1
        })
        .to(targets[2], {
            width: fullWidth,
            delay: 1,
            duration: 1,
        })
        .to(targets[2], {
            width: width,
            delay: 2,
            duration: 1
        })
        .to(targets[3], {
            width: fullWidth,
            delay: 1,
            duration: 1
        })
        .to(targets[3], {
            width: width,
            delay: 2,
            duration: 1
        })
        .to(targets[4], {
            width: fullWidth,
            delay: 1,
            duration: 1
        })
        .to(targets[4], {
            width: width,
            delay: 2,
            duration: 1
        })

    gsap.timeline()
        .to(targets, {
            x: -width,
            delay: 13,
            duration: 1
        })
        .to(targets, {
            x: 0,
            delay: 2,
            duration: 1
        })
        .to(targets, {
            x: -(width * 2),
            duration: 1,
            delay: 1
        })
        .to(targets, {
            x: 0,
            duration: 1,
            delay: 2
        })
        .to(targets, {
            x: -(width * 2),
            duration: 1,
            delay: 1
        })
        .to(targets, {
            x: 0,
            duration: 1,
            delay: 2
        })
}

onMounted(() => {
    const width = window.innerWidth

    const targets: Element[] = gsap.utils.toArray('.slide-item')

    let toTop = false;

    gsap.set(targets, { width: width / 5 })

    for (let i = 0; i < targets.length; i++) {
        gsap.fromTo(targets[i], {
            yPercent: -100
        }, {
            yPercent: 0,
            duration: 1,
            delay: i * .2
        })
        toTop = !toTop
    }

    run(targets, width / 5)

    setInterval(() => {
        run(targets, width / 5)
    }, 1000 * 25)

})
</script>

<template>
    <div class="h-[700px] overflow-hidden">
        <div  class="relative flex w-full h-full overflow-hidden">
            <img
                v-for="(item, index) in items"
                :key="item"
                class="object-cover h-full slide-item"
                :src="item"
                :alt="item"
            />
            <div class="absolute w-full h-full bg-black bg-opacity-30" />
        </div>
    </div>
</template>