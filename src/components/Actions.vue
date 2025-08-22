<template>
  <section id="actions" class="relative mx-auto max-w-[1140px] px-6 md:px-8 py-20">
    <div class="grid gap-10 md:grid-cols-2">
      <div v-reveal>
        <h2 class="mb-3 text-4xl font-bold text-white">Actions &amp; Automations</h2>
        <p class="mb-4 text-slate-300">Agents can safely call real-world functions with approvals and audit logs.</p>
        <ul class="space-y-2 text-slate-300">
          <li><strong>Communication:</strong> send email, Slack/Telegram/WhatsApp messages, create support tickets.</li>
          <li><strong>Scheduling:</strong> create calendar events, set reminders, book meetings.</li>
          <li><strong>CRM/Docs:</strong> create/update CRM leads, log calls, write to Notion/Sheets.</li>
          <li><strong>Ops:</strong> fetch order status, update shipping, generate invoices, process refunds (with gating).</li>
          <li><strong>Data:</strong> DB queries (read), analytics lookups, search knowledge with citations.</li>
        </ul>
      </div>
      <div class="card hover-glow rounded-2xl border border-white/12 bg-white/5 p-6 border-gradient" v-reveal>
        <div class="mb-3 font-medium text-slate-200">Example tool call</div>
        <pre class="overflow-auto rounded-lg bg-black/40 p-4 text-xs text-slate-300">{
  "tool": "create_calendar_event",
  "params": {
    "title": "Demo with Acme",
    "start": "2025-06-25T10:00:00Z",
    "duration_min": 30,
    "attendees": ["ceo@acme.com"]
  },
  "approval": "required"
}</pre>
        <div class="mt-3 text-xs text-slate-400">Standard schema: name, params (JSON Schema), approval policy, idempotency key.</div>
      </div>
    </div>
  </section>
</template>
