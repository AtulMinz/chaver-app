"use client";

export default function Navbar() {
  return (
    <nav className="min-w-full bg-white shadow-md">
      <div className="flex min-w-full items-center justify-between px-4 py-2">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-red-500">chaver</span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-lg font-medium text-gray-700 bg-red-200 px-4 py-1 rounded-md">
            Feed
          </span>
        </div>
      </div>
    </nav>
  );
}
