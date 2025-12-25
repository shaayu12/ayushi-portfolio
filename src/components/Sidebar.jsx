export default function Sidebar({ active, setActive }) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-8">Ayushi Sharma</h1>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition
                ${
                  active === item.id
                    ? "bg-primary text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        <button
          onClick={toggleDarkMode}
          className="w-full bg-primary text-white py-2 rounded-lg"
        >
          Toggle Dark Mode
        </button>
      </div>
    </aside>
  );
}
