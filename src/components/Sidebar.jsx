export default function Sidebar({ active, setActive }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-8">
        <h1 className="text-xl font-semibold tracking-tight mb-2">Ayushi Sharma</h1>
        <p className="mb-8" style={{ fontSize: "13px" }}>Senior Shopify Developer</p>


        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition
                ${
                  active === item.id
                    ? "bg-[rgb(var(--primary))] text-white font-medium"
                    : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
