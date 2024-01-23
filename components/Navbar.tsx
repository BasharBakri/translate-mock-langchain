"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">Overview</a>
      <a className={`mr-4 ${pathname === "/translate" ? "text-white border-b" : ""}`} href="/translate">🌐 Translate</a>
    </nav>
  );
}