<template>
  <section id="faq" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <h2 class="mb-6 text-4xl font-bold text-white">FAQ</h2>
    <div class="space-y-3">
      <details class="rounded-xl border border-white/12 bg-white/5 p-4" v-reveal>
        <summary class="cursor-pointer text-slate-200">How do approvals work?</summary>
        <div class="mt-2 text-slate-300">Sensitive messages are routed to your team’s queue. Approve or reject with one click.</div>
      </details>
      <details class="rounded-xl border border-white/12 bg-white/5 p-4" v-reveal>
        <summary class="cursor-pointer text-slate-200">Where is data stored?</summary>
        <div class="mt-2 text-slate-300">We host in EU/US regions. Data encryption at rest and in transit.</div>
      </details>
      <details class="rounded-xl border border-white/12 bg-white/5 p-4" v-reveal>
        <summary class="cursor-pointer text-slate-200">Can I bring my own LLM?</summary>
        <div class="mt-2 text-slate-300">Yes, BYO model and vector store via API.</div>
      </details>
      <details class="rounded-xl border border-white/12 bg-white/5 p-4" v-reveal>
        <summary class="cursor-pointer text-slate-200">Do you have an API?</summary>
        <div class="mt-2 text-slate-300">Full REST + webhooks. Docs available.</div>
      </details>
    </div>
  </section>
</template>
