<template>
  <div class="scroll-progress" id="scroll-progress"></div>
  <main class="min-h-screen scroll-smooth bg-bg antialiased bg-duotone bg-aurora bg-grid">
    <Header />
    <Hero />
    <Steps />
    <ApproveSection />
    <Workspaces />
    <Knowledge />
    <Actions />
    <UseCases />
    <Integrations />
    <Pricing />
    <Security />
    <Testimonials />
    <FAQ />
    <FinalCTA />
    <FooterBar />
  </main>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'

import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Steps from './components/Steps.vue'
import ApproveSection from './components/ApproveSection.vue'
import Workspaces from './components/Workspaces.vue'
import Knowledge from './components/Knowledge.vue'
import Actions from './components/Actions.vue'
import UseCases from './components/UseCases.vue'
import Integrations from './components/Integrations.vue'
import Pricing from './components/Pricing.vue'
import Security from './components/Security.vue'
import Testimonials from './components/Testimonials.vue'
import FAQ from './components/FAQ.vue'
import FinalCTA from './components/FinalCTA.vue'
import FooterBar from './components/FooterBar.vue'

onMounted(()=>{
  const bar = document.getElementById('scroll-progress')
  function updateProgress(){
    const h = document.documentElement
    const sTop = h.scrollTop || document.body.scrollTop
    const sHeight = h.scrollHeight - h.clientHeight
    const p = Math.max(0, Math.min(1, sHeight ? sTop / sHeight : 0))
    if(bar){ bar.style.width = `${p*100}%` }
  }
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  onUnmounted(()=> window.removeEventListener('scroll', updateProgress))
})

</script>
