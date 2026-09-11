"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

type Props = {
  id: string;
  title: string[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

export default function SplitFeatureSection({
  id,
  title,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  imagePosition,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const imageOnRight = imagePosition === "right";

  return (
    <section
      id={id}
      className="scroll-mt-32 overflow-hidden bg-neutral-950 text-white lg:scroll-mt-24"
    >
      <div
        ref={ref}
        className={`flex flex-col transition-all duration-700 ease-out motion-reduce:transition-none ${
          imageOnRight ? "lg:flex-row-reverse" : "lg:flex-row"
        } ${
          inView
            ? "translate-x-0 opacity-100"
            : `opacity-0 motion-reduce:opacity-100 ${
                imageOnRight ? "translate-x-16" : "-translate-x-16"
              } motion-reduce:translate-x-0`
        }`}
      >
        <div className="relative h-[280px] w-full bg-neutral-800 lg:h-[560px] lg:w-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:w-1/2 lg:px-16">
          <h2 className="font-serif text-3xl font-semibold leading-tight uppercase tracking-wide sm:text-4xl">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex w-fit items-center border border-white/40 px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
