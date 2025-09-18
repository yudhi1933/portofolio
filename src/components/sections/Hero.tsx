export function Hero() {
  return (
    <section className="mb-10 grid gap-6 md:grid-cols-2 md:items-center">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">Hi, I’m Yudhi 👋</h1>
        <p className="text-gray-400">Frontend developer fokus React, Next.js, Tailwind. Berpengalaman membangun POS (pagination, filter, modal) & LMS multi-tenant (Payload CMS, Docker).</p>
      </div>
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li className="rounded-md bg-gray-800 p-2 text-blue-300">React</li>
          <li className="rounded-md bg-gray-800 p-2 text-blue-300">Next.js</li>
          <li className="rounded-md bg-gray-800 p-2 text-blue-300">Tailwind</li>
          <li className="rounded-md bg-gray-800 p-2 text-blue-300">Payload CMS</li>
        </ul>
      </div>
    </section>
  );
}
