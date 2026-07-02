interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="whitespace-nowrap font-mono text-accent text-sm sm:text-base">
        {number}.
      </span>
      <h2 className="whitespace-nowrap text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
      <span className="h-px w-full max-w-xs bg-border sm:max-w-sm" aria-hidden="true" />
    </div>
  );
}
