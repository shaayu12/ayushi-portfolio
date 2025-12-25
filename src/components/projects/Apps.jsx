export default function Apps() {
  const apps = [
    {
      name: "Video Reels App",
      description:
        "Shopify theme extension to display short-form video content on storefronts, improving user engagement.",
      tech: "Liquid, JavaScript, Shopify Theme Extensions",
    },
    {
      name: "Product Comparison App",
      description:
        "Allows customers to compare products side-by-side for better decision-making.",
      tech: "Shopify APIs, Liquid, JavaScript",
    },
    {
      name: "Wishlist App",
      description:
        "Enables customers to save products for future purchases, improving retention.",
      tech: "JavaScript, Shopify APIs",
    },
    {
      name: "Private Product Management App",
      description:
        "Internal Shopify app replicating core product management features like add, edit, delete, and bulk import/export.",
      tech: "Shopify Admin APIs, JavaScript",
    },
    {
      name: "Lookbook App",
      description:
        "Visual gallery for curated product collections integrated with Shopify backend.",
      tech: "Liquid, JavaScript, Shopify APIs",
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      {apps.map((app) => (
        <div
          key={app.name}
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900"
        >
          <h3 className="text-lg font-medium mb-2">{app.name}</h3>
          <p className="text-gray-600 mb-2">
            {app.description}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Tech:</span> {app.tech}
          </p>
        </div>
      ))}
    </div>
  );
}
