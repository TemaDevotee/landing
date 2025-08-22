<template>
  <button @click="next" :title="`Theme: ${label}`"
    class="ml-3 rounded-full border px-2 py-1 text-xs text-slate-300 opacity-70 hover:bg-white/5 hover:opacity-100"
    style="border-color:var(--border)">
    {{ label }}
  </button>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// These must correspond to CSS classes you define (or already have) in styles.css
const themes = [
  'theme-ocean','theme-vio-pink','theme-mint-lime',
  'theme-amber','theme-gray','theme-graphite',
  'theme-sunset','theme-cyber','theme-light-corp'
] as const

const i = ref(0)
const label = computed(() => themes[i.value].replace('theme-','').replace(/-/g,' '))

function apply(t: typeof themes[number]){
  const b = document.body
  b.classList.forEach(c => { if (c.startsWith('theme-')) b.classList.remove(c) })
  b.classList.add(t)
  localStorage.setItem('t-theme', t)
}

onMounted(() => {
  const saved = localStorage.getItem('t-theme') as typeof themes[number] | null
  const ok = !!saved && themes.includes(saved as any)
  i.value = ok ? themes.indexOf(saved as any) : 0
  apply(themes[i.value])
})

function next(){
  i.value = (i.value + 1) % themes.length
  apply(themes[i.value])
}
</script>
