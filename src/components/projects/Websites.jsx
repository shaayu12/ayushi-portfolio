export default function Websites() {
  const sites = [
    {
      name: "MSI",
      description: [
        "Led ongoing maintenance and feature enhancements for MSI’s multi-store Shopify ecosystem (Germany, France, Spain, and B2B).",
        "Built bespoke content-driven pages and custom sections to support marketing and growth initiatives",
        "Gaming Monitor Buying Guide (France) – https://fr-store.msi.com/pages/comment-choisir-ecran-pc-gamer-guide-2025",
        "Rewards Program Page (Germany) – https://fr-store.msi.com/pages/reward-program",
        "Ensured localization, performance, and UX consistency across all regional stores.",
        "https://eu-business-store.msi.com/"
      ],
      image: "/msi.png",
      website: "https://eu-business-store.msi.com/",
    },
    {
      name: "Originals Furniture",
      description: [
        "Delivered end-to-end website development with a focus on scalable and maintainable architecture.",
        "Designed dynamic product page templates to support complex variant structures.",
        "Implemented variant-level metadata such as availability status and estimated delivery.",
        "Improved transparency and overall user experience on product pages.",
        "https://www.originals.com.sg/products/linen-duvet-cover-sand"
      ],
      image: "/originals-furniture.png",
      website: "https://www.originals.com.sg/",
    },
    {
      name: "Smile Pro",
      description: [
        "Developed custom product pages and reusable Shopify sections to support merchandising and marketing goals.",
        "Implemented location-based redirection to route users to the correct regional store, improving user experience and conversion accuracy.",
        "Optimized website performance and load speed through theme enhancements, asset optimization, and best practices.",
        "Built custom CMS pages and modular sections to enable scalable content updates across multiple stores."
      ],
      image: "/smilepro.png",
      website: "https://www.smileproworldwide.com/",
    },
    {
      name: "Staze Beauty",
      description: [
        "Led a team of 4 developers to build the Staze Beauty website from scratch.",
        "Developed a custom product grid with advanced variant visibility and filtering.",
        "Built product pages with variant-specific image galleries, skin-tone–based variant suggestions, and dynamic A+ content.",
        "Created a custom shade finder feature to improve product discovery. - https://www.stazebeauty.com/pages/shade-finder",
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
        "https://payalkhandwala.com/collections/shirts-tops"
      ],
      image: "/payal-khandwala.png",
      website: "https://payalkhandwala.com/",
    },
    {
      name: "Bluestar",
      description: [
        "Worked extensively on a custom product grid.",
        "Developed a category-wise 'Compare Products' feature to improve product evaluation.",
        "Built a custom mega menu optimized for both desktop and mobile experiences.",
        "Implemented tabbed collection pages to improve navigation and content organization.",
        "https://consumer.bluestarindia.com/collections/air-coolers#desert-air-coolers"
      ],
      image: "/bluestar.png",
      website: "https://consumer.bluestarindia.com/",
    },
    {
      name: "Nxtrnd",
      description: [
         "Led a team of 4 developers to redesign the Nxtrnd website end-to-end.",
         "Focused on implementing the Build-Your-Own-Box (BYOB) feature, header redesign, and cart notification popup.",
         "Developed a variant-based 'Complete the Look' feature on the product page.",
         "Designed and implemented custom collection filters based on client requirements.",
         "https://nxtrndusa.com/collections/byob-collection"
      ],
      image: "/nxtrnd.png",
      website: "https://nxtrndusa.com/",
   },
   {
      name: "Moha",
      description: [
        "Led a team of 3 developers to build the Moha website from scratch.",
        "Implemented the Dosha Skin Assessment feature to provide personalized skincare recommendations. - https://www.moha.co.in/pages/dosha-skin-assessment?page=0",
        "Developed a custom e-gifts collection page for digital gifting. - https://www.moha.co.in/collections/gift-cards",
        "Built the Moha TV page to showcase video-based content and brand storytelling. - https://www.moha.co.in/pages/moha-tv"
      ],
      image: "/moha.png",
      website: "https://www.moha.co.in/",
    },
    {
      name: "Salkari",
      description: [
        "Developed a custom engraving and gift-wrapping feature directly on the product page to enhance personalization and gifting experience.",
        "Built an upsell section with multi-product add-to-cart functionality, enabling users to add multiple items in a single click and increasing AOV.",
        "Implemented a custom collection page navigator to improve product discoverability and user flow across large catalogs."
      ],
      image: "/salkari.png",
      website: "https://salkari.fi/",
    },
    {
      name: "The Venetian Resort Las Vegas",
      description: [
        "Built a custom “Build-a-Basket” feature enabling customers to curate personalized gift baskets, improving user engagement and average order value.",
        "Developed a custom cart experience with additional checkout fields including guest name, recipient name, preferred delivery date, card message, and special delivery instructions to support hospitality-focused use cases.",
        "Implemented infinite scroll on collection pages, allowing users to browse more products seamlessly without manual pagination, enhancing discovery and UX.",
        "https://shop.venetianlasvegas.com/pages/build-a-basket"
      ],
      image: "/venetian.png",
      website: "https://shop.venetianlasvegas.com/",
    }


  ];

  const isLink = (text) => text.startsWith("http");

  return (
    <div className="space-y-12 max-w-5xl">
      {sites.map((site, index) => {
        const isEven = index % 2 !== 0; // 2nd, 4th, etc.

        return (
          <div
            key={site.name}
            className={`border border-gray-200 rounded-xl bg-white
              flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } overflow-hidden`}
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <a href={site.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full max-w-md h-55 object-fill
                             border border-gray-200 rounded-xl
                             mt-6 lg:mt-10"
                />
              </a>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-lg font-medium mb-4">
                {site.name}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                {site.description.map((item, i) => (
                  <li key={i}>
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
        );
      })}
    </div>
  );
}
