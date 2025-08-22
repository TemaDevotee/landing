<template>
  <section id="how" class="relative mx-auto max-w-[1140px] px-6 md:px-8 pt-24 pb-24">
    <h2 class="mb-2 text-4xl font-bold text-slate-100">How it works</h2>
    <p class="mb-10 max-w-2xl text-slate-300">Build, approve, and deploy in minutes — without losing control.</p>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 text-accent-light' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 20l9-5-9-5-9 5 9 5z'/></svg>
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white">Add knowledge</h3>
        <p class="text-slate-300">Upload PDFs, links, spreadsheets. Trickster chunks & indexes.</p>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 text-accent-light' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-3-3v6M5 3v4M19 3v4M5 17v4M19 17v4'/></svg>
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white">Set approvals</h3>
        <p class="text-slate-300">Sensitive rules route replies to your team’s queue.</p>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 text-accent-light' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 10h11M9 21V3m6 18l6-6-6-6'/></svg>
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white">Deploy anywhere</h3>
        <p class="text-slate-300">Web, Slack, Telegram, WhatsApp — one click.</p>
      </div>
    </div>
  </section>
</template>
