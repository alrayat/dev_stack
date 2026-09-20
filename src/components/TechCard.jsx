function TechCard({ tool, added, onAdd }) {
  return (
    <article className="flex min-h-71.25 flex-col rounded-2xl border border-[#edf1f5] bg-white p-4 shadow-[0_3px_14px_rgba(15,23,42,0.025)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#edf1f5] bg-[#fbfcfd]">
          <img
            src={tool.icon}
            alt={tool.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="rounded-full bg-[#eff6ff] px-2.5 py-1 text-[9px] font-semibold text-[#0284c7]">
          {tool.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[16px] font-bold text-[#111827]">{tool.name}</h3>

      <p className="mt-2 min-h-16.5 text-[11px] leading-[1.65] text-[#64748b]">
        {tool.description}
      </p>

      <div className="my-3 h-px bg-[#f1f5f9]" />

      <div className="flex items-center justify-between gap-2 text-[9px] text-[#64748b]">
        <span className="rounded bg-[#f1f5f9] px-2 py-1">{tool.category}</span>
        <span>{tool.difficulty}</span>
        <span className="font-medium text-[#475569]">
          <span className="text-[#f59e0b]">★</span> {tool.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={added}
        onClick={() => onAdd(tool)}
        className={`mt-3 w-full rounded-lg py-2.5 text-[10px] font-semibold ${added
          ? "cursor-not-allowed bg-[#e9edf2] text-[#64748b]"
          : "bg-[#0f172a] text-white hover:bg-[#1e293b]"
          }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechCard;
