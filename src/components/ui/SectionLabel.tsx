export function SectionLabel({
  index,
  title,
  onDark = false,
}: {
  index: string;
  title: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-3 text-xs uppercase tracking-[0.2em] ${
        onDark ? "text-sage-300" : "text-walnut-500"
      }`}
    >
      <span className="font-display">{index}</span>
      <span className={`h-px w-8 ${onDark ? "bg-sage-300/50" : "bg-walnut-500/50"}`} />
      <span>{title}</span>
    </div>
  );
}
