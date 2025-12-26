export default function Apps() {

  /* ================= PUBLIC APPS ================= */
  const apps = [
    {
      name: "Product Video Feed",
      description:
        "A Shopify app that displays a video feed on the storefront, allowing merchants to showcase product videos in a scrollable, engaging format. (Live Demo Password: ayushi)",
      tech: "Shopify Theme Extensions, Liquid, JavaScript",
      demoLink:
        "https://ayushidevelopment.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVJoZVhWemFHbGtaWFpsYkc5d2JXVnVkQzV0ZVhOb2IzQnBabmt1WTI5dEJqb0dSVlE9IiwiZXhwIjoiMjAyNS0xMi0yNVQxMzoyNDo1MC4xMzRaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--7f6dccc308cd1eb3c886a0ff8d0a048e36035b30&_fd=0&_sc=1&key=256e497ac2d691aecdedcd9a3b95342b45b354eabd51e4c71c7eb900fabeb6a1&preview_theme_id=141728186519",
      appStoreLink: "https://apps.shopify.com/meroxio-product-video-feed",
    },
    {
      name: "Product Comparison App",
      description:
        "Allows customers to compare multiple products side-by-side to improve decision-making.",
      tech: "Shopify APIs, Liquid, JavaScript",
      demoLink: "https://quickcompare-by-meroxio.myshopify.com/",
      appStoreLink: "https://apps.shopify.com/meroxio-product-compare",
    },
    {
      name: "Wishlist App",
      description:
        "Enables customers to save products for later, improving retention and repeat visits.",
      tech: "JavaScript, Shopify APIs",
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

  /* ================= PRIVATE APP SCREENSHOTS ================= */
const privateAppScreenshots = [
  {
    label: "Login",
    src: "/login.png",
    description:
      "Users can securely log in using their credentials and select a location. The selected location is stored in product tags, allowing products to be tracked and managed based on their source location.",
  },
  {
    label: "Product Listing",
    src: "/product-listing.png",
    description:
      "A centralized listing page that displays all products, making it easy to browse, review, and manage existing items.",
  },
  {
    label: "Add Product",
    src: "/add-product.png",
    description:
      "A dedicated form for adding new products with support for custom fields such as Year, Make, Model, and Attachment. These additional attributes are stored using Shopify metafields.",
  },
  {
    label: "Edit Product",
    src: "/edit-product.png",
    description:
      "An edit interface where existing product data is automatically pre-filled, allowing users to update product details quickly and accurately.",
  },
  {
    label: "Delete Product",
    src: "/delete-product.png",
    description:
      "Allows products to be safely removed from the system when they are no longer required.",
  },
  {
    label: "Import Products",
    src: "/import-products.png",
    description:
      "Supports bulk product creation by importing data through a CSV file, streamlining large-scale product management.",
  },
  {
    label: "Export Products",
    src: "/export-products.png",
    description:
      "Enables products to be exported as a CSV file for reporting, backups, or external data processing.",
  },
];


  return (
    <div className="space-y-14 max-w-6xl">

      {/* ================= PUBLIC APPS SECTION ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Public Apps</h2>

        <div className="space-y-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="border border-gray-200 rounded-xl p-6 bg-white"
            >
              <h3 className="text-lg font-medium mb-2">{app.name}</h3>

              <p className="text-gray-600 mb-3">
                {app.description}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Tech:</span> {app.tech}
              </p>

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
          ))}
        </div>
      </section>

      {/* ================= PRIVATE APPS SECTION ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Private Apps</h2>

        <div className="border border-gray-200 rounded-xl bg-white p-6 lg:p-8">
          <h3 className="text-lg font-medium mb-3">
            Product Management App
          </h3>

          <p className="text-gray-600 mb-6">
            An internal Shopify admin app built to manage products efficiently. It replicates core product management workflows such as product creation, editing, deletion, and bulk import/export through a custom admin interface.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {privateAppScreenshots.map((shot, index)   => (
              <div
                key={shot.label}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="text-lg text-left py-2 bg-gray-50 p-4">
                 {index + 1}. {shot.label}
                </div>
                <div className="px-4 py-3 border-t border-gray-200">
        <p className="text-sm text-gray-600 leading-relaxed">
          {shot.description}
        </p>
      </div>
                <img
                  src={shot.src}
                  alt={shot.label}
        className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
