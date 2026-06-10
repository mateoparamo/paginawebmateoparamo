import { Reveal } from "./Reveal";

export function SectionHeading({ children }: { children: string }) {
  return (
    <Reveal>
      <h2 className="kicker text-base font-bold text-ink md:text-lg">
        {children}
      </h2>
    </Reveal>
  );
}
