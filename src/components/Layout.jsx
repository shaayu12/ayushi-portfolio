import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content Area */}
      <main className="flex-1 overflow-y-auto px-8 py-10">
        {children}
      </main>
    </div>
  );
}
