export default function Hero() {
  return (
    <section className="max-w-3xl">
      {/* Name */}
      <h1 className="text-4xl font-semibold tracking-tight mb-2">
        Ayushi Sharma
      </h1>

      {/* Role */}
      <h2 className="text-lg mb-6 text-[rgb(var(--primary))]">
        Senior Shopify Developer
      </h2>

      {/* Intro */}
      <p className="text-gray-600 leading-relaxed mb-8">
        Senior Shopify Developer with 6+ years of experience building custom
        Shopify themes and public/private apps. Specialized in performance
        optimization, conversion-focused UI/UX, and scalable eCommerce solutions
        for global brands.
      </p>

      {/* Actions */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="/Ayushi_Sharma_Resume.pdf"
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
            border border-gray-300 dark:border-gray-700
            text-gray-700 dark:text-gray-300
            hover:border-[rgb(var(--primary))]
            hover:text-[rgb(var(--primary))]
            transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
