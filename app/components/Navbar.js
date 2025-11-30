"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/globe.svg" alt="CampusConnect" width={24} height={24} />
            <span className="text-base font-semibold tracking-tight text-blue-600 sm:text-lg">CampusConnect</span>
          </Link>
        </div>

        <div className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Home</Link>
          <Link href="/dashboard" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Dashboard</Link>
          <Link href="/profile" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Profile</Link>
          <Link href="/login" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Login</Link>
          <Link href="/register" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Register</Link>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            {open ? (
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-zinc-200 bg-white px-4 py-4">
            <Link href="/" className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">Home</Link>
            <Link href="/dashboard" className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">Dashboard</Link>
            <Link href="/profile" className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">Profile</Link>
            <Link href="/login" className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">Login</Link>
            <Link href="/register" className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}