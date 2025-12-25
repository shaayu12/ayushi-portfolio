export default function Websites() {
  const sites = [
    {
      name: "Originals Furniture",
      description: [
        "Delivered end-to-end website development with a focus on scalable and maintainable architecture.",
        "Designed dynamic product page templates to support complex variant structures.",
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
         "Implemented the Dosha Skin Assessment feature to provide personalized skincare recommendations.",
         "Developed a custom e-gifts collection page for digital gifting.",
         "Built the Moha TV page to showcase video-based content and brand storytelling.",
         "https://www.moha.co.in/pages/dosha-skin-assessment?page=0",
         "https://www.moha.co.in/collections/gift-cards",
         "https://www.moha.co.in/pages/moha-tv"
      ],
      image: "/moha.png",
      website: "https://www.moha.co.in/",
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
