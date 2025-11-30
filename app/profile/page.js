import Image from "next/image";

export const metadata = { title: "Profile • CampusConnect" };

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-zinc-900">Profile</h1>
      <p className="mt-2 text-sm text-zinc-600">Manage your personal details.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {/* Avatar */}
        <div className="md:col-span-1">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-zinc-200">
              <Image src="/globe.svg" alt="Avatar" fill className="object-contain p-4" />
            </div>
            <button className="rounded-md border border-blue-600 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">Change</button>
          </div>
        </div>

        {/* Details form */}
        <form className="md:col-span-2 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-zinc-700">Full Name</label>
              <input id="fullName" name="fullName" type="text" className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
              <input id="email" name="email" type="email" className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="you@university.edu" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="major" className="block text-sm font-medium text-zinc-700">Major</label>
              <input id="major" name="major" type="text" className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Computer Science" />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-zinc-700">Year</label>
              <select id="year" name="year" className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100">
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
                <option>Graduate</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="button" className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}