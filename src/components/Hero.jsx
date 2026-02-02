export default function Hero() {
  return (
    <section className="max-w-5xl">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
            Ayushi Sharma
          </h1>

          <h2 className="text-sm lg:text-lg mb-6 text-[rgb(var(--primary))]">
            Product Manager +  Senior Shopify Developer
          </h2>

          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
            Shopify expert with over 6 years of hands-on experience building, scaling, and managing high-performance e-commerce solutions. I’ve grown from developing custom themes and apps to leading Shopify products end-to-end, collaborating closely with design, QA, and business teams. Known for translating business requirements into clean, scalable Shopify solutions, improving UX, performance, and conversions for high-traffic brands. I enjoy owning problems, mentoring teams, and delivering products that genuinely work for both users and businesses.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/Ayushi_Sharma_Resume_2026.pdf"
              download
              className="px-5 py-2.5 rounded-md text-sm font-medium
                bg-[rgb(var(--primary))] text-white
                hover:opacity-90 transition"
            >
              Download Resume
            </a>

            <a
              href="mailto:sharmaayushi664@gmail.com"
              className="px-5 py-2.5 rounded-md text-sm font-medium
                border border-gray-300
                text-gray-700
                hover:border-[rgb(var(--primary))]
                hover:text-[rgb(var(--primary))]
                transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE — VERTICAL */}
        <div className="flex-shrink-0">
          <img
            src="/mee.jpeg"
            alt="Ayushi Sharma"
            className="
              w-100 h-100
              lg:w-88 lg:h-120
              object-cover
              rounded-xl
              border border-gray-200
            "
          />
        </div>

      </div>
    </section>
  );
}
