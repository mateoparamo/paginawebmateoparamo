import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
}

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <span className="kicker">{kicker}</span>
      <h2 className="display-lg mt-5 max-w-3xl text-balance">{title}</h2>
    </Reveal>
  );
}
