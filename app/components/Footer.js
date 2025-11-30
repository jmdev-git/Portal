import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Home</Link>
            <Link href="/dashboard" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Dashboard</Link>
            <Link href="/profile" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Profile</Link>
            <Link href="/login" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Login</Link>
            <Link href="/register" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Register</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}