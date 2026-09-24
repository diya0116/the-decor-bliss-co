import Image from "next/image";
import { categories } from "@/data/categories";
import SectionTitle from "./SectionTitle";

export default function CategoryCards() {
  return (
    <section className="py-16 md:py-24 px-6" aria-label="What We Curate">
      <SectionTitle heading="Curated for Every Celebration" />

      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <article
            key={cat.slug}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-brown/10"
          >
            {/* Replace with actual category image */}
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover md:group-hover:scale-[1.03] transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-brown-dark/30 md:group-hover:bg-brown-dark/40 transition-colors" />

            {/* Label */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="font-serif text-lg md:text-xl text-blush tracking-wide">
                {cat.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
