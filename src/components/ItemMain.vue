<script setup>
import EsLottiePlayer from './lottiePlayer'
import { ref } from 'vue'

const isVideoLaptop = () => window.innerWidth > 992
let toggle = ref(isVideoLaptop())
window.addEventListener('resize', () => toggle.value = isVideoLaptop())
</script>

<template>
  <section class="es-product">
    <div class="es-amazon">
      <div class="es-amazon-title">
        <h1>Amazon funnels</h1>
      </div>
      <div class="es-amazon-content">
        <div class="es-amazon-content-ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="es-amazon-content-text">
          <p>Based on reviews on</p>
        </div>
        <div class="es-amazon-content-logo">
          <img alt="Capterra" src="/src/assets/img/capterra.svg">
        </div>
      </div>
      <div class="es-amazon-footer">
        <button class="btn btn-primary" type="button">Get started for free!</button>
      </div>
    </div>

    <div class="es-control">
      <h2>Get sales, leads, and product reviews that you control!</h2>
    </div>

    <es-lottie-player v-if="toggle" class="es-video-laptop" src="/src/assets/animations/funnels_header_laptop.json"/>
    <es-lottie-player v-else class="es-video-mobile" src="/src/assets/animations/funnels_header_mobile.json"/>
  </section>
</template>

<style lang="scss" scoped>
.es-video-laptop
{
  max-width: 772px;
}

.es-video-mobile
{
  max-width: 457px;
}
</style>