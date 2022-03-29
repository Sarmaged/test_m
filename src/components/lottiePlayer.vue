<script setup>
const props = defineProps({
  src: {
    type: String, default: null,
  },
})
</script>

<template>
  <lottie-player :src="props.src" autoplay background="transparent" loop speed="1"/>
</template>
