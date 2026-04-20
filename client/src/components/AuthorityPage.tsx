import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
};

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
};

export function AuthorityShell({ children }: { children: ReactNode }) {
  return (
    <main className="homepage-shell authority-shell relative min-h-screen overflow-hidden pt-20 text-foreground sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,oklch(0.55_0.25_300/0.10),transparent_58%)]" />
      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(156,114,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.8)_1px,transparent_1px)] [background-size:132px_132px]" />
      <div className="relative z-10">{children}</div>
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:gap-16"
        >
          <div className="max-w-4xl">
            <p className="homepage-eyebrow digital-accent">{eyebrow}</p>
            <h1 className="hero-tech-title mt-6 max-w-[58rem] text-[1.5rem] leading-[1.24] text-white sm:text-[2rem] md:text-[2.45rem] lg:text-[2.75rem]">
              {title}
            </h1>
            <p className="hero-support-copy mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {copy}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {secondaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {children && <div>{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="homepage-eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">{copy}</p>}
    </div>
  );
}

export function AuthoritySection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 ${className}`}>
      <div className="container relative z-10 mx-auto px-4">{children}</div>
      <div className="homepage-section-divider" />
    </section>
  );
}

export function EditorialList({
  items,
}: {
  items: Array<{ title: string; copy: string; href?: string }>;
}) {
  return (
    <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map((item, index) => {
        const body = (
          <>
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/38">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/92">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">{item.copy}</p>
            </div>
          </>
        );

        return item.href ? (
          <a
            key={item.title}
            href={item.href}
            className="grid gap-5 py-6 transition-colors hover:bg-white/[0.015] sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8 sm:py-7"
          >
            {body}
          </a>
        ) : (
          <div
            key={item.title}
            className="grid gap-5 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8 sm:py-7"
          >
            {body}
          </div>
        );
      })}
    </div>
  );
}

export function FinalCta({
  eyebrow = "Next step",
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
}) {
  return (
    <AuthoritySection className="border-t border-white/[0.08]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="homepage-eyebrow">{eyebrow}</p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">{copy}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Get AI Search Audit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/build-in-public"
            className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Read the public build
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </AuthoritySection>
  );
}

