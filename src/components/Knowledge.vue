<template>
  <section id="knowledge" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <div class="grid gap-10 md:grid-cols-2">
      <div v-reveal>
        <h2 class="mb-3 text-4xl font-bold text-white">Knowledge</h2>
        <p class="mb-5 max-w-xl text-slate-300">Upload PDFs, links, spreadsheets. Trickster chunks and keeps it fresh.</p>
        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"><svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 20l9-5-9-5-9 5 9 5z'/></svg> PDF</span>
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"><svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 13a5 5 0 007.54.54l2.12-2.12a5 5 0 10-7.07-7.07l-1.06 1.06'/></svg> URL</span>
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"><svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 10h11M9 21V3m6 18l6-6-6-6'/></svg> CSV</span>
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"><svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 19.5A2.5 2.5 0 006.5 22h11A2.5 2.5 0 0020 19.5v-15A2.5 2.5 0 0017.5 2h-11A2.5 2.5 0 004 4.5v15z'/></svg> TXT</span>
        </div>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-3 font-medium text-slate-200">Your knowledge</div>
        <div class="space-y-3">
          <div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
            <div><div class="font-medium text-slate-200">Pricing_FAQ.pdf</div><div class="text-xs text-slate-400">Linked to: Support Bot</div></div>
            <button class="rounded-md border border-white/12 bg-white/5 px-3 py-2 text-slate-200 hover:bg-white/10">Manage</button>
          </div>
          <div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
            <div><div class="font-medium text-slate-200">RefundPolicy.txt</div><div class="text-xs text-slate-400">Linked to: Sales Bot</div></div>
            <button class="rounded-md border border-white/12 bg-white/5 px-3 py-2 text-slate-200 hover:bg-white/10">Manage</button>
          </div>
          <div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
            <div><div class="font-medium text-slate-200">https://docs.example.com</div><div class="text-xs text-slate-400">Unused</div></div>
            <button class="rounded-md border border-white/12 bg-white/5 px-3 py-2 text-slate-200 hover:bg-white/10">Attach to bot</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
