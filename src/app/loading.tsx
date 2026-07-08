export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-green-600"></div>
        <p className="text-sm font-medium text-neutral-500 animate-pulse">Loading portal...</p>
      </div>
    </div>
  );
}
