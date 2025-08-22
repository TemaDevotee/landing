<template>
  <button @click="next" :title="label"
    class="ml-3 rounded-full border px-2 py-1 text-xs text-slate-300 opacity-70 hover:bg-white/5 hover:opacity-100"
    style="border-color:var(--border)">
    {{ label }}
  </button>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
const themes=['theme-ocean','theme-vio-pink','theme-mint-lime','theme-amber-orange','theme-gray-graphite','theme-sunset','theme-cyber','theme-light-corp']
const i=ref(0)
const label = computed(()=> themes[i.value].replace('theme-','').replace(/-/g,' '))
function apply(t){ const b=document.body; themes.forEach(x=>b.classList.remove(x)); b.classList.add(t); localStorage.setItem('t-theme',t) }
onMounted(()=>{ const saved=localStorage.getItem('t-theme'); if(saved && themes.includes(saved)){ i.value=themes.indexOf(saved); apply(saved) } else { apply(themes[0]) } })
function next(){ i.value=(i.value+1)%themes.length; apply(themes[i.value]) }
</script>
