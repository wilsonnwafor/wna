import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  title,
  description,
  className,
  as: Tag = "h2",
}: {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Tag id={id} className="text-3xl leading-[1.15] tracking-tightest md:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
