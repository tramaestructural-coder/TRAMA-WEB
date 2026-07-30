export type FaqItem = {
  pregunta: string;
  respuesta: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-stone-300 border-t border-stone-300">
      {items.map((item) => (
        <details key={item.pregunta} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-ink marker:content-none">
            {item.pregunta}
            <span className="shrink-0 text-xl text-walnut-500 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
            {item.respuesta}
          </p>
        </details>
      ))}
    </div>
  );
}
