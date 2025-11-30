export const metadata = { title: "Dashboard • CampusConnect" };

const announcements = [
  { id: 1, title: "Library Renovation", body: "The main library will be closed next week for upgrades." },
  { id: 2, title: "Exam Schedule", body: "Midterms are scheduled for Dec 12–19. Check your course pages." },
  { id: 3, title: "Cafeteria Menu", body: "New healthy options added to the cafeteria this month." },
];

const events = [
  { id: 1, date: "Dec. 5", name: "Career Fair", place: "Student Center" },
  { id: 2, date: "Dec. 10", name: "AI Workshop", place: "Engineering Hall" },
  { id: 3, date: "Dec. 22", name: "Alumni Talk", place: "Auditorium" },
];

const courses = [
  { id: 1, code: "MT101", name: "Multimedia Technologies", instructor: "Prof. Smith" },
  { id: 2, code: "WD101", name: "Web Development 1", instructor: "Prof. Nguyen" },
  { id: 3, code: "GEEL2", name: "The Entrepreneurial Mind", instructor: "Prof. Patel" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
        <a href="/profile" className="hidden rounded-md border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 sm:inline-block">Edit Profile</a>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Announcements */}
        <section className="lg:col-span-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-zinc-900">Announcements</h2>
              <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">View all</a>
            </div>
            <div className="mt-4 space-y-4">
              {announcements.map((a) => (
                <article key={a.id} className="rounded-md border border-zinc-200 p-4">
                  <h3 className="text-base font-semibold text-zinc-900">{a.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Upcoming Events</h2>
            <ul className="mt-4 space-y-3">
              {events.map((e) => (
                <li key={e.id} className="flex items-center justify-between rounded-md border border-zinc-200 p-3">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{e.name}</p>
                    <p className="text-xs text-zinc-600">{e.place}</p>
                  </div>
                  <span className="rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white">{e.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Courses */}
      <section className="mt-8">
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">Courses</h2>
            <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Manage</a>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div key={c.id} className="rounded-md border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900">{c.code} • {c.name}</p>
                <p className="mt-1 text-xs text-zinc-600">Instructor: {c.instructor}</p>
                <div className="mt-3 flex gap-2">
                  <a href="#" className="inline-flex items-center justify-center rounded-md border border-blue-600 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">Syllabus</a>
                  <a href="#" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">Open</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}