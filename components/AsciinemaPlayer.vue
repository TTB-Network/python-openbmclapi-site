<script setup lang="ts">
import { ref as Silian_ref, onMounted as Silian_onMounted } from 'vue'
import 'asciinema-player/dist/bundle/asciinema-player.css'
const Silian_props = defineProps<{
    url: string
    options?: Partial<{
        cols: number
        rows: number
        autoPlay: boolean
        preload: boolean
        loop: boolean
        startAt: number | string
        speed: number
        idleTimeLimit: number
        theme: string
        poster: string
        fit: string
        fontSize: string
    }>
}>()

const Silian_asciinemaRef = Silian_ref()
Silian_onMounted(() => {
    import('asciinema-player').then((Silian_AsciinemaPlayer) => {
        Silian_AsciinemaPlayer.create(Silian_props.url, Silian_asciinemaRef.value, Silian_props.options)
    })
})
</script>

<template>
    <div ref="Silian_asciinemaRef" class="m-3"></div>
</template>

<style scoped>
:deep(.ap-player) svg {
    display: inline-block;
}
:deep(.ap-player) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
