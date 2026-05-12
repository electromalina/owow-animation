import Link from "next/link";
import { notFound } from "next/navigation";

import { animations, getAnimationBySlug } from "@/src/data/animations";

export function generateStaticParams() {
  return animations.map((animation) => ({
    slug: animation.slug,
  }));
}

export default async function AnimationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const animation = getAnimationBySlug(slug);

  if (!animation) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-8 md:px-10">
      <Link
        href="/library"
        className="inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        <span aria-hidden="true" className="text-base leading-none">
          ←
        </span>
        <span>Back to library</span>
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <section className="flex min-h-[340px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-[#1a1a1a] text-zinc-500">
          Preview placeholder
        </section>

        <aside className="flex flex-col justify-between gap-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-zinc-300">
              {animation.category}
            </span>
            <div className="space-y-3">
              <h1 className="text-4xl font-medium tracking-tight text-white">
                {animation.title}
              </h1>
              <p className="text-base leading-7 text-zinc-300">
                {animation.summary}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm leading-6 text-zinc-400">
            <p>Slug: {animation.slug}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
