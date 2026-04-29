import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useLocation } from "wouter";
import {
  getBreadcrumbsForPath,
  getRelatedPagesForPath,
} from "@/content/topical-map";

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
  const [location] = useLocation();
  const breadcrumbs = getBreadcrumbsForPath(location);
  const relatedPages = getRelatedPagesForPath(location);

  return (
    <main className="homepage-shell authority-shell relative min-h-screen overflow-hidden pt-20 text-foreground sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,oklch(0.55_0.25_300/0.10),transparent_58%)]" />
      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(156,114,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.8)_1px,transparent_1px)] [background-size:132px_132px]" />
      <div className="relative z-10">
        {breadcrumbs.length > 1 && <AuthorityBreadcrumbs items={breadcrumbs} />}
        {children}
        {relatedPages.length > 0 && (
          <RelatedAuthorityPages items={relatedPages} />
        )}
      </div>
    </main>
  );
}

function AuthorityBreadcrumbs({
  items,
}: {
  items: Array<{ path: string; label: string }>;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 pb-2 pt-6 text-xs text-white/48"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-white/26" />
              )}
              {isCurrent ? (
                <span aria-current="page" className="text-white/70">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function relatedActionLabel(path: string, title: string) {
  if (path === "/ai-search-audit") return "Read the AI Search Audit";
  if (path === "/visibility-system") return "Explore the visibility system";
  if (path === "/civive-os") return "Explore CiviveOS";
  if (path === "/civive-os-offer") return "Compare CiviveOS plans";
  if (path === "/ai-receptionist") return "Compare AI receptionist fit";
  if (path === "/contact") return "Request the audit";
  if (path.startsWith("/resources/")) return "Read the resource";
  if (path === "/resources") return "Open the resource hub";
  if (path === "/industries") return "Browse industries";
  return `Open ${title}`;
}

function RelatedAuthorityPages({
  items,
}: {
  items: Array<{
    path: string;
    title: string;
    pageType: string;
    searchIntent: string;
  }>;
}) {
  return (
    <AuthoritySection className="border-t border-white/[0.08]">
      <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
        <SectionHeader
          eyebrow="Related authority paths"
          title="Continue through the pages that support this decision."
          copy="These internal links connect the audit, visibility system, CiviveOS, AI receptionist, resources, proof, and conversion paths so buyers and crawlers can follow the topic cleanly."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(item => (
            <a
              key={item.path}
              href={item.path}
              className="group border-y border-white/[0.08] py-5 transition-colors hover:border-white/[0.22]"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/34">
                {item.pageType}
              </p>
              <h3 className="mt-3 text-xl font-medium text-white/92 transition-colors group-hover:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {item.searchIntent}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                {relatedActionLabel(item.path, item.title)}
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </AuthoritySection>
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
      {copy && (
        <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">
          {copy}
        </p>
      )}
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
              <h3 className="text-xl font-medium text-white/92">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                {item.copy}
              </p>
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
  primaryCta = {
    label: "Get an AI Search Visibility Audit",
    href: "/contact",
  },
  secondaryCta = {
    label: "Read the public build",
    href: "/build-in-public",
  },
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}) {
  return (
    <AuthoritySection className="border-t border-white/[0.08]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="homepage-eyebrow">{eyebrow}</p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
          {copy}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={primaryCta.href}
            className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            {secondaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </AuthoritySection>
  );
}
