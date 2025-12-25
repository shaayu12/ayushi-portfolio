export default function Apps() {
  const apps = [
    {
      name: "Product Video Feed",
      description: "A Shopify app that displays a video feed on the storefront, allowing merchants to showcase product videos in a scrollable, engaging format. (Live Demo Password: ayushi)",
      tech: "Shopify Theme Extensions, Liquid, JavaScript",
      demoLink: "https://ayushidevelopment.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVJoZVhWemFHbGtaWFpsYkc5d2JXVnVkQzV0ZVhOb2IzQnBabmt1WTI5dEJqb0dSVlE9IiwiZXhwIjoiMjAyNS0xMi0yNVQxMzoyNDo1MC4xMzRaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--7f6dccc308cd1eb3c886a0ff8d0a048e36035b30&_fd=0&_sc=1&key=256e497ac2d691aecdedcd9a3b95342b45b354eabd51e4c71c7eb900fabeb6a1&preview_theme_id=141728186519",
      appStoreLink: "https://apps.shopify.com/meroxio-product-video-feed",
    },
    {
      name: "Product Comparison App",
      description: "Allows customers to compare multiple products side-by-side to improve decision-making.",
      tech: "Shopify APIs, Liquid, JavaScript",
      demoLink: "https://quickcompare-by-meroxio.myshopify.com/",
      appStoreLink: "https://apps.shopify.com/meroxio-product-compare",
    },
    {
      name: "Wishlist App",
      description: "Enables customers to save products for later, improving retention and repeat visits.",
      tech: "JavaScript, Shopify APIs",
      demoLink: "https://quickcompare-by-meroxio.myshopify.com/",
      appStoreLink: "https://apps.shopify.com/meroxio-product-compare",
    },
    {
      name: "Private Product Management App",
      description:
        "Internal Shopify app replicating core product management features such as add, edit, delete, and bulk import/export.",
      tech: "Shopify Admin APIs, JavaScript",
      demoLink: "https://quickcompare-by-meroxio.myshopify.com/",
      appStoreLink: "https://apps.shopify.com/meroxio-product-compare",
    },
    {
      name: "Lookbook App",
      description:
        "Visual lookbook feature for curated product collections integrated with Shopify backend.",
      tech: "Liquid, JavaScript, Shopify APIs",
      demoLink: "https://apps.meroxio.com/pages/lookbook",
      appStoreLink: "https://apps.shopify.com/meroxio-lookbook",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      {apps.map((app) => (
        <div
          key={app.name}
          className="border border-gray-200 rounded-xl p-6 bg-white
                     flex flex-col lg:flex-row gap-6 items-start"
        >
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">{app.name}</h3>

            <p className="text-gray-600 mb-3">
              {app.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium">Tech:</span> {app.tech}
            </p>

            {/* LINKS */}
            <div className="flex gap-4 flex-wrap text-sm font-medium">
              {app.demoLink && (
                <a
                  href={app.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--primary))] hover:underline"
                >
                  Live Demo →
                </a>
              )}

              {app.appStoreLink && (
                <a
                  href={app.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--primary))] hover:underline"
                >
                  Shopify App Store →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
