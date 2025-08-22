<template>
  <section id="use-cases" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <h2 class="mb-10 text-4xl font-bold text-white">Use cases</h2>
    <div class="grid gap-6 md:grid-cols-4">
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-2 font-semibold text-white">Support</div>
        <div class="rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
          Q: How do I track my order?
          <div class="mt-2 rounded-md bg-white/5 p-2 text-xs text-slate-300">A: Use your tracking code… <span class="text-slate-400">Approved</span></div>
        </div>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-2 font-semibold text-white">Sales FAQ</div>
        <div class="rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
          Q: Do you offer discounts?
          <div class="mt-2 rounded-md bg-white/5 p-2 text-xs text-slate-300">A: Volume pricing available…</div>
        </div>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-2 font-semibold text-white">Internal IT</div>
        <div class="rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
          Q: Reset my laptop password
          <div class="mt-2 rounded-md bg-white/5 p-2 text-xs text-slate-300">A: Follow this SSO link…</div>
        </div>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-2 font-semibold text-white">HR</div>
        <div class="rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
          Q: Vacation policy?
          <div class="mt-2 rounded-md bg-white/5 p-2 text-xs text-slate-300">A: 24 paid days + national holidays…</div>
        </div>
      </div>
    </div>
  </section>
</template>
