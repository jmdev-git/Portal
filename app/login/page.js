export const metadata = { title: "Login • CampusConnect" };

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-zinc-900">Login</h1>
      <p className="mt-2 text-sm text-zinc-600">Access your dashboard and courses.</p>

      <form className="mt-6 space-y-4">
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
            autoComplete="current-password"
            required
            className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Sign In</button>
      </form>

      <p className="mt-4 text-sm text-zinc-600">
        New to CampusConnect? <a href="/register" className="font-semibold text-blue-700 hover:text-blue-800">Create an account</a>.
      </p>
    </div>
  );
}