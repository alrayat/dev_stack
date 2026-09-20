function StackPanel({ items, onRemove, onClear }) {
  return (
    <aside className="rounded-2xl border border-[#edf1f5] bg-white p-5 lg:sticky lg:top-21">
      <h2 className="text-[17px] font-bold text-[#0f172a]">Your Stack</h2>

      <p className="mt-1 text-[11px] text-[#94a3b8]">
        {items.length === 0
          ? "No technologies selected yet."
          : `${items.length} ${items.length === 1 ? "Technology" : "Technologies"} Selected`}
      </p>

      {items.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-[#dbe3eb] px-4 py-8 text-center text-[11px] text-[#94a3b8]">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-[#dfe6ee] px-2.5 py-2.5"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-7 w-7 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-bold text-[#0f172a]">
                      {item.name}
                    </p>
                    <p className="text-[8px] text-[#94a3b8]">{item.category}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id, item.name)}
                  className="ml-2 text-xl leading-none text-[#94a3b8] hover:text-[#d81b7e]"
                  aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClear}
            className="mt-5 w-full rounded-lg border border-[#f2a6a8] py-2 text-[12px] font-semibold text-[#dc2626] hover:bg-[#fff5f5]"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackPanel;
