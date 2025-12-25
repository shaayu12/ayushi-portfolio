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


// usedtoyota app screenshots

// https://www.moha.co.in/
// Skin Assessment
// https://www.moha.co.in/pages/dosha-skin-assessment?page=0



// https://usedtoyotalift.com/pages/help-me-choose


// custom product page
// https://www.lockenbox.com/en/products/abo-box-fur-lockige-haare

// custom cart drawers - erenjoy, daysahead, ayuga,

// custom password page - daysahead