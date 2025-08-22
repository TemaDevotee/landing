<template>
  <section id="workspaces" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <div class="grid gap-10 md:grid-cols-2">
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
          Workspace
          <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4 opacity-70' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>
        </div>
        <div class="space-y-3">
          <div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4"><span class="text-slate-200">Acme Inc</span><span class="text-xs text-slate-400">Active</span></div>
          <div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4"><span class="text-slate-200">Nordico</span><span class="text-xs text-slate-400">Paused</span></div>
          <div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4"><span class="text-slate-200">Studio X</span><span class="text-xs text-slate-400">Active</span></div>
        </div>
      </div>
      <div v-reveal>
        <h2 class="mb-3 text-4xl font-bold text-white">Workspaces</h2>
        <p class="mb-4 text-slate-300">Run multiple brands or clients. Switch context instantly.</p>
        <ul class="space-y-2 text-slate-300">
          <li>Per-workspace configs</li>
          <li>Usage analytics & limits</li>
          <li>Separate billing</li>
        </ul>
      </div>
    </div>
  </section>
</template>
