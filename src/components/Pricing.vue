<template>
  <section id="pricing" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <h2 class="mb-10 text-4xl font-bold text-white">Pricing</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-3 text-xl font-semibold text-white">Free</div>
        <ul class="mb-6 space-y-2 text-slate-300"><li>1 workspace</li><li>Basic approvals</li><li>Community support</li></ul>
        <button class="w-full btn-primary">Select</button>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-3 text-xl font-semibold text-white">Pro</div>
        <ul class="mb-6 space-y-2 text-slate-300"><li>Unlimited workspaces</li><li>Advanced rules</li><li>Priority support</li></ul>
        <button class="w-full btn-primary">Select</button>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-3 text-xl font-semibold text-white">Team</div>
        <ul class="mb-6 space-y-2 text-slate-300"><li>Role-based queues</li><li>Audit & analytics</li><li>SLA support</li></ul>
        <button class="w-full btn-primary">Select</button>
      </div>
    </div>
  </section>
</template>
