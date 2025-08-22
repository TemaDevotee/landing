<template>
  <footer class="border-t border-white/10 py-10 text-center text-sm text-slate-400">
    © {{ year }} Trickster — All rights reserved.
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>
