<template>
  <section id="approve" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <div class="grid gap-10 md:grid-cols-2">
      <div v-reveal>
        <h2 class="mb-3 text-4xl font-bold text-white">Approve Mode</h2>
        <ul class="space-y-3 text-slate-300">
          <li class="flex items-start gap-3"><span class="text-accent-light mt-1">◆</span> Human-in-the-loop for sensitive replies</li>
          <li class="flex items-start gap-3"><span class="text-accent-light mt-1">◆</span> Role-based queues & full audit trail</li>
          <li class="flex items-start gap-3"><span class="text-accent-light mt-1">◆</span> Zero data leaks policy</li>
        </ul>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-5 shadow-card border-gradient" v-reveal>
        <div class="mb-3 text-sm text-slate-300">3 replies awaiting approval</div>
        <div class="space-y-3">
          <div class="rounded-lg border border-white/10 bg-black/30 p-4 transition-colors hover:border-white/20">
            <div class="mb-3 text-slate-200">Draft: Shipment ETA for order #104</div>
            <div class="flex items-center gap-3">
              <button class="flex-1 rounded-md bg-accent px-3 py-2 text-white">Approve</button>
              <button class="flex-1 rounded-md bg-[#2b2f37] px-3 py-2 text-slate-200">Reject</button>
            </div>
          </div>
          <div class="rounded-lg border border-white/10 bg-black/30 p-4 transition-colors hover:border-white/20">
            <div class="mb-3 text-slate-200">Draft: Invoice copy for client “North”</div>
            <div class="flex items-center gap-3">
              <button class="flex-1 rounded-md bg-accent px-3 py-2 text-white">Approve</button>
              <button class="flex-1 rounded-md bg-[#2b2f37] px-3 py-2 text-slate-200">Reject</button>
            </div>
          </div>
          <div class="rounded-lg border border-white/10 bg-black/30 p-4 transition-colors hover:border-white/20">
            <div class="mb-3 text-slate-200">Draft: Courier phone number request</div>
            <div class="flex items-center gap-3">
              <button class="flex-1 rounded-md bg-accent px-3 py-2 text-white">Approve</button>
              <button class="flex-1 rounded-md bg-[#2b2f37] px-3 py-2 text-slate-200">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
