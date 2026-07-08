import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4 text-center">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-sm border border-neutral-200">
        <h1 className="text-6xl font-extrabold text-green-600">404</h1>
        <h2 className="mt-4 text-xl font-bold text-neutral-900">Page Not Found</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors cursor-pointer"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
