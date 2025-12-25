export default function Websites() {
  const sites = [
    {
      name: "Classic Weaves",
      description:
        "Shopify store revamp focused on UI/UX improvements, modular sections, and performance optimization.",
      role: "Senior Shopify Developer",
    },
    {
      name: "Nutrolis",
      description:
        "Conversion-focused Shopify store with improved product layouts and user flow.",
      role: "Shopify Developer",
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      {sites.map((site) => (
        <div
          key={site.name}
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900"
        >
          <h3 className="text-lg font-medium mb-2">{site.name}</h3>
          <p className="text-gray-600 mb-2">
            {site.description}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Role:</span> {site.role}
          </p>
        </div>
      ))}
    </div>
  );
}
