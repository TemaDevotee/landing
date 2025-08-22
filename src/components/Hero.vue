<script setup>
import HeroIllustration from './HeroIllustration.vue'
</script>

<template>
  <div class="relative overflow-hidden bg-bg pb-48 md:pb-56 pt-20 text-slate-100 glow-wrap">
    <div class="glow"></div>
    <section class="relative z-10 mx-auto grid max-w-[1140px] items-center gap-10 px-6 md:grid-cols-2">
      <div v-reveal>
        <h1 class="mb-4 max-w-xl text-5xl leading-tight font-extrabold gradient-text leading-[1.05] md:text-7xl">
          AI agents that work like your team — with your rules.
        </h1>
        <p class="mb-8 max-w-xl text-lg text-slate-300">Connect knowledge, add approvals, deploy anywhere.</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="#get-started" class="btn-primary">
            Get started free
            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14m-7-7l7 7-7 7'/></svg>
          </a>
          <a href="#demo" class="btn-secondary">
            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 24 24' fill='currentColor'><path d='M8 5v14l11-7L8 5z'/></svg>
            Watch 60s demo
          </a>
        </div>
      </div>
      <div class="mx-auto w-full max-w-[560px]" v-reveal><HeroIllustration /></div>
    </section>
  </div>
</template>
