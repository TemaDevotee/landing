<template>
  <div class="relative overflow-hidden bg-bg pb-48 md:pb-56 pt-20 text-slate-100 glow-wrap">
    <div class="glow"></div>
    <section class="relative z-10 mx-auto grid max-w-[1140px] items-center gap-10 px-6 md:grid-cols-2 md:px-8">
      <div v-reveal>
        <h1 class="mb-4 max-w-xl text-5xl leading-tight font-extrabold gradient-text leading-[1.05] md:text-7xl">
          AI agents that work like your team — with your rules.
        </h1>
        <p class="mb-8 max-w-xl text-lg text-slate-300">Connect knowledge, add approvals, deploy anywhere.</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="#get-started" class="btn-primary">
            Get started free
            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14m-7-7l7 7-7 7'/></svg>
          </a>
          <a href="#demo" class="btn-secondary">
            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 24 24' fill='currentColor'><path d='M8 5v14l11-7L8 5z'/></svg>
            Watch 60s demo
          </a>
        </div>
      </div>
      <div class="mx-auto w-full max-w-md" v-reveal>
        <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
          <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 7h18M3 12h18M3 17h18'/></svg>
          Workspace: Acme Inc
          <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4 opacity-70' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>
        </div>
        <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-4 shadow-card border-gradient" v-tilt>
          <div class="mb-3 flex items-center gap-2 text-sm text-slate-300">
            <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 10h.01M12 10h.01M16 10h.01M9 16h6M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z'/></svg>
            Approve pending reply
          </div>
          <div class="mb-4 rounded-lg bg-black/30 p-4 text-slate-200">
            Sure! I can help with your order status. Here’s the info you need…
          </div>
          <div class="flex items-center gap-3">
            <button class="flex-1 rounded-lg bg-accent px-4 py-2 font-medium text-white shadow hover:brightness-110">Approve</button>
            <button class="flex-1 rounded-lg bg-[#2b2f37] px-4 py-2 font-medium text-slate-200 hover:bg-[#333845]">Reject</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
