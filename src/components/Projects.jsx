import { useState } from "react";
import Apps from "./projects/Apps";
import Websites from "./projects/Websites";

export default function Projects() {
  const [tab, setTab] = useState("apps");

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setTab("apps")}
          className={`px-4 py-2 rounded-lg text-sm transition
            ${
              tab === "apps"
                ? "bg-[rgb(var(--primary))] text-white"
                : "border border-gray-300 dark:border-gray-700 text-gray-600"
            }`}
        >
          Apps
        </button>

        <button
          onClick={() => setTab("websites")}
          className={`px-4 py-2 rounded-lg text-sm transition
            ${
              tab === "websites"
                ? "bg-[rgb(var(--primary))] text-white"
                : "border border-gray-300 dark:border-gray-700 text-gray-600"
            }`}
        >
          Websites
        </button>
      </div>

      {/* Content */}
      {tab === "apps" && <Apps />}
      {tab === "websites" && <Websites />}
    </section>
  );
}
