import { useState } from "react";

export default function Sidebar({ active, setActive }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 flex justify-between items-center px-4 py-3">
        <span className="font-semibold">Ayushi Sharma</span>
        <button
          onClick={() => setOpen(true)}
          className="text-sm border px-3 py-1 rounded"
        >
          Menu
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8 lg:hidden">
            <span className="font-semibold">Navigation</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition
                  ${
                    active === item.id
                      ? "bg-[rgb(var(--primary))] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
