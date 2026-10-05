"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-900/95 text-white backdrop-blur-md border-b border-white/10 shadow-sm transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-wide">
          <span aria-hidden className="text-sky-brand">✦</span> SMK 10 SMARTSCHOOL
        </Link>

        <button
          className="md:hidden rounded border border-white/40 px-3 py-1 text-sm"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        <nav id="menu" className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 bg-navy-900/95 p-5 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:bg-transparent md:p-0`}>
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith("/" + item.href.split("/")[1]);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`block py-1 text-sm transition-colors hover:text-sky-brand ${active ? "text-sky-brand" : ""}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="hidden min-w-56 flex-col rounded-lg bg-white p-2 text-ink shadow-lg group-hover:flex group-focus-within:flex md:absolute md:left-0 md:top-full">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="rounded px-3 py-2 text-sm hover:bg-sky-soft">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
