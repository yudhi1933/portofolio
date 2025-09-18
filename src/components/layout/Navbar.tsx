"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-blue-400">
          YUDHI.dev
        </Link>
        <ul className="flex items-center gap-4 text-sm">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={pathname === n.href ? "font-semibold text-blue-400 underline underline-offset-4" : "text-gray-300 hover:text-blue-300"}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
