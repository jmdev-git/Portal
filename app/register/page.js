export const metadata = { title: "Register • CampusConnect" };

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-zinc-900">Create Account</h1>
      <p className="mt-2 text-sm text-zinc-600">Join CampusConnect and start exploring.</p>

      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="you@university.edu"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label htmlFor="confirm" className="block text-sm font-medium text-zinc-700">Confirm Password</label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Create Account</button>
      </form>

      <p className="mt-4 text-sm text-zinc-600">
        Already have an account? <a href="/login" className="font-semibold text-blue-700 hover:text-blue-800">Sign in</a>.
      </p>
    </div>
  );
}