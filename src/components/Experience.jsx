export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>

      <div className="space-y-10 max-w-4xl">

        {/* MeroxIO */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 p-5 lg:p-6">
          <h3 className="text-lg font-medium">
            Senior Shopify Developer
          </h3>

          <p className="text-sm text-gray-500 mb-3">
            MeroxIO IT Solutions Pvt Ltd · Noida, India <br />
            <span className="italic">Sep 2020 – Present</span>
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>
              Developed and maintained multiple Shopify eCommerce websites for international clients.
            </li>
            <li>
              Built custom Shopify themes and modular sections using Liquid, HTML, CSS, JavaScript, and jQuery.
            </li>
            <li>
              Developed public and private Shopify apps to extend store functionality.
            </li>
            <li>
              Implemented advanced features using Shopify APIs and third-party integrations.
            </li>
            <li>
              Optimized storefront performance, UX, and conversion flows.
            </li>
            <li>
              Collaborated with designers, project managers, and clients to deliver projects on time.
            </li>
            <li>
              Provided ongoing maintenance, bug fixes, and enhancements for live Shopify stores.
            </li>
            <li>
              Conducted system testing to ensure stability and reliability.
            </li>
          </ul>
        </div>

        {/* ENS Enterprises */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 p-5 lg:p-6">
          <h3 className="text-lg font-medium">
            Associate Shopify Developer
          </h3>

          <p className="text-sm text-gray-500 mb-3">
            ENS Enterprises Pvt Ltd · Noida, India <br />
            <span className="italic">Jun 2019 – Sep 2020</span>
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>
              Assisted in Shopify store development and theme customization under senior developer guidance.
            </li>
            <li>
              Worked on feature development, debugging, and responsive layouts.
            </li>
            <li>
              Fixed cross-browser compatibility issues across devices.
            </li>
            <li>
              Supported testing, deployment, and post-launch maintenance activities.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
