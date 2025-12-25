export default function Skills() {
  const skillGroups = [
    {
      title: "Shopify & eCommerce",
      skills: [
        "Shopify Theme Development",
        "Liquid",
        "Custom Shopify Apps",
        "Storefront API",
        "Webhooks",
        "Checkout & CRO Optimization",
        "Performance Optimization",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        "Git & GitHub",
        "REST APIs",
        "Cross-Browser Testing",
        "SEO-Friendly Development",
      ],
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>

      <div className="space-y-10 max-w-4xl">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-medium mb-4 text-primary">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
