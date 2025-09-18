export function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Payload CMS", "Docker (basic)"];
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold text-white">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
