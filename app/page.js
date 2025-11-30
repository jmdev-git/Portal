import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">Welcome to CampusConnect</h1>
            <p className="text-base leading-7 text-zinc-600 sm:text-lg">
              Your modern university portal for announcements, events, and courses.
              Built mobile-first for speed and usability.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/dashboard" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Go to Dashboard
              </a>
              <a href="/register" className="inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Create Account
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-48 w-full max-w-md md:h-64 lg:h-80">
            <Image
              src="/window.svg"
              alt="CampusConnect"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Announcements",
              desc: "Stay updated with the latest campus news.",
            },
            {
              title: "Upcoming Events",
              desc: "Discover workshops, meetups, and lectures.",
            },
            { title: "Courses", desc: "Browse and manage your enrolled courses." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
              <a href={f.title === "Announcements" ? "/dashboard" : f.title === "Upcoming Events" ? "/dashboard" : "/dashboard"} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
