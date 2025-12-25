export default function Contact() {
  return (
    <section
      className="relative max-w-full lg:max-w-4xl rounded-none lg:rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('/contact-phone-notepad.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* BLACK transparent overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative p-10 text-white">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="leading-relaxed mb-8 max-w-xl text-gray-200">
            I’m open to full-time opportunities involving Shopify development,
            custom theme development, and Shopify app development. I enjoy working
            closely with product, design, and engineering teams to build scalable,
            high-quality eCommerce solutions.
         </p>

        {/* Contact details */}
        <div className="space-y-4 text-sm mb-10">
          <div>
            <p className="text-gray-400 mb-1">Email</p>
            <a
              href="mailto:sharmaayushi664@gmail.com"
              className="text-[rgb(var(--primary))] hover:underline"
            >
              sharmaayushi664@gmail.com
            </a>
         </div>
              
         <div>
            <p className="text-gray-400 mb-1">Phone</p>
            <a
              href="tel:7310820712"
              className="text-[rgb(var(--primary))] hover:underline"
            >
               +91-7310820712
            </a>
         </div>
              

          <div>
            <p className="text-gray-400 mb-1">Location</p>
            <p>Noida, India</p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">Availability</p>
            <p>Open to remote and hybrid roles</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="mailto:sharmaayushi664@gmail.com"
          className="inline-block px-6 py-3 rounded-md text-sm font-medium
            bg-[rgb(var(--primary))] text-white
            hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
