"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-display text-2xl font-semibold text-primary-950 dark:text-white">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
        An unexpected error occurred while loading this page. Please try again.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
