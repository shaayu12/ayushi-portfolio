export default function Websites() {
  const sites = [
    {
      name: "Originals Furniture",
      description: [
        "Delivered end-to-end website development with a focus on scalable and maintainable architecture.",
        "Designed dynamic product page templates to support complex variant structures.",
        "Built reusable and customizable product templates for different product types.",
        "Implemented variant-level metadata such as availability status and estimated delivery.",
        "Improved transparency and overall user experience on product pages.",
        "https://www.originals.com.sg/products/linen-duvet-cover-sand",
        "https://www.originals.com.sg/products/ponte-petite-l-shape-fabric-sofa-228-cm",
        "https://www.originals.com.sg/products/bok-desk-oak"
      ],
        image: "/originals-furniture.png",
        website: "https://www.originals.com.sg/",
     },
     {
         name: "Staze Beauty",
         description: [
            "Led a team of 4 developers to build the Staze Beauty website from scratch.",
            "Developed a custom product grid with advanced variant visibility and filtering.",
            "Built product pages with variant-specific image galleries, skin-tone–based variant suggestions, and dynamic A+ content.",
            "Created a custom shade finder feature to improve product discovery.",
            "Implemented a custom cart drawer with related product recommendations and quick add-to-cart functionality.",
         ],
         image: "/staze-beauty.png",
         website: "https://www.stazebeauty.com/",
      },
      {
         name: "Payal Khandwala",
         description: [
            "Built custom collection pages with the ability to dynamically switch between grid and slider layouts, including configurable banner placements between products.",
            "Developed a 'Build a Set' feature allowing customers to select a top and bottom combination and add selected items to cart in a single action.",
            "https://payalkhandwala.com/collections/shirts-tops",
            "https://payalkhandwala.com/collections/home-1"
         ],
         image: "/payal-khandwala.png",
         website: "https://payalkhandwala.com/",
      },
      {
         name: "Bluestar",
         description: [
            "Worked extensively on a custom product grid tailored for large product catalogs.",
            "Developed a category-wise 'Compare Products' feature to improve product evaluation.",
            "Built a custom mega menu optimized for both desktop and mobile experiences.",
            "Implemented tabbed collection pages to improve navigation and content organization.",
            "https://consumer.bluestarindia.com/collections/air-coolers#desert-air-coolers"
         ],
         image: "/bluestar.png",
         website: "https://consumer.bluestarindia.com/",
         }
  ];

  const isLink = (text) => text.startsWith("http");

  return (
    <div className="space-y-8 max-w-5xl">
      {sites.map((site) => (
        <div
          key={site.name}
          className="border border-gray-200 rounded-xl bg-white
                     flex flex-col lg:flex-row overflow-hidden"
        >
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <a href={site.website} target="_blank"><img
              src={site.image}
              alt={site.name}
              className="w-full h-56 border border-gray-200 rounded-xl object-cover mt-10 ml-5"
            /></a>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 ml-5">
            <h3 className="text-lg font-medium mb-4">
              {site.name}
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              {site.description.map((item, index) => (
                <li key={index}>
                  {isLink(item) ? (
                    <a
                      href={item}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(var(--primary))] hover:underline break-all"
                    >
                      View Example →
                    </a>
                  ) : (
                    <span>• {item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
