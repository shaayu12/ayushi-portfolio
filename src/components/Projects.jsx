export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="space-y-4">
        <div className="p-6 border rounded-xl">
          <h3 className="font-medium">Classic Weaves</h3>
          <p className="text-gray-600 dark:text-gray-300">
            UI/UX improvements, modular Shopify sections, performance tuning.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-medium">Nutrolis</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Conversion-focused redesign and theme scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
