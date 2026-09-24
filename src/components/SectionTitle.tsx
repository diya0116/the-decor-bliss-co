interface SectionTitleProps {
  heading: string;
  subtitle?: string;
}

export default function SectionTitle({ heading, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown-dark tracking-wide">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-text/70 tracking-widest uppercase font-light">
          {subtitle}
        </p>
      )}
      <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
    </div>
  );
}
