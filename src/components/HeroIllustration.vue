<script setup lang="ts">
import hero1x from '../assets/hero/hero-scheme.png'
import hero2x from '../assets/hero/hero-scheme@2x.png'
</script>

<template>
  <figure class="hero-illu">
    <img
      :src="hero1x"
      :srcset="`${hero1x} 1x, ${hero2x} 2x`"
      alt="Knowledge in — agent — answers out"
      width="560" height="360"
      class="hero-illu__img"
    />
  </figure>
</template>

<style scoped>
.hero-illu{
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 14 / 9;
  overflow: visible;
}
.hero-illu__img{
  display:block; width:100%; height:100%; object-fit:contain;
  /* subtle base glow + a tiny inner pop, themed */
  filter:
    drop-shadow(0 8px 20px rgba(var(--accent-rgb, 96,165,250), .12))
    drop-shadow(0 2px  6px rgba(var(--accent-rgb, 96,165,250), .06));
  transition: filter .22s ease;
}
.hero-illu:hover .hero-illu__img,
.hero-illu:focus-within .hero-illu__img{
  filter:
    drop-shadow(0 14px 36px rgba(var(--accent-rgb, 96,165,250), .20))
    drop-shadow(0 0   14px rgba(var(--accent-rgb, 96,165,250), .14));
}
@media (prefers-reduced-motion: reduce){
  .hero-illu__img{ transition: none; }
}
</style>
