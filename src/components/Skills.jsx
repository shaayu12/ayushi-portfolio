export default function Skills() {
  const skillGroups = [
    {
      title: "Shopify & eCommerce",
      skills: [
        "Shopify Theme Development",
        "Liquid",
        "Public and Private Shopify Apps",
        "App Integration",
        "Shopify APIs"
      ],
    },
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "jQuery",
      ],
    },
    {
      title: "E-Commerce",
      skills: [
        "Performance Optimization",
        "Conversion Optimization",
        "UX Improvements"
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
         "Git & GitHub",
         "Monday Board",
         "Trello",
         "Jira",
         "Slack",
        "Debugging",
        "Cross-Browser Testing",
        "Responsive Design",
        "SEO-Friendly Development",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Collaboration",
        "Client Communication",
        "Problem Solving"
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
