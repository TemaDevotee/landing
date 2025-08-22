<template>
  <div class="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-[#0F141B]/60">
    <section class="relative mx-auto max-w-[1140px] px-6 md:px-8 flex h-16 items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent-deep to-accent">
          <div class="h-3 w-3 rounded-sm bg-white/90" />
        </div>
        <span class="font-semibold tracking-tight text-slate-100">trickster</span>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-slate-300">
        <a href="#use-cases" class="hover:text-white">Use Cases</a>
        <a href="#how" class="hover:text-white">How it works</a>
        <a href="#pricing" class="hover:text-white">Pricing</a>
        <a href="#security" class="hover:text-white">Security</a>
        <a href="#docs" class="hover:text-white">Docs</a>
        <a href="#login" class="hover:text-white">Login</a>
        <a href="#get-started" class="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-medium text-white shadow-sm transition-transform hover:scale-[1.03]">
          Start free
          <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14m-7-7l7 7-7 7'/></svg>
        </a>
      <ThemeSwitch /></nav>
      <button class="md:hidden rounded-full border border-white/10 px-3 py-2 text-slate-200">Menu</button>
    </section>
  </div>
</template>
