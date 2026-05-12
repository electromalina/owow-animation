import Image from "next/image";
import Link from "next/link";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#1b1b1b]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <Image src="/owow.svg" alt="OWOW" width={123} height={26} priority />
          <span className="text-[2rem] font-normal leading-none text-zinc-400">
            Atlas
          </span>
        </Link>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center text-white transition hover:text-zinc-300"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
