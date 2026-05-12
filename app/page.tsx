import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6 text-white">
      <div className="flex w-full max-w-2xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          OWOW Atlas
        </span>
        <h1 className="text-4xl font-medium tracking-tight">
          Home page placeholder
        </h1>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/library"
            className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/15 px-6 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Open library
          </Link>
          <Link
            href="/library/animation-1"
            className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/15 px-6 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Open sample detail
          </Link>
        </div>
      </div>
    </main>
  );
}
