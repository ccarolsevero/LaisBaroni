export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium text-ink">
            {item.question}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-mid transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-ink">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
