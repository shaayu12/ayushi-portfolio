export default function Skills() {
  const skillGroups = [
    {
      title: "Shopify & eCommerce",
      skills: [
        "Shopify Theme Development (Custom & OS 2.0)",
        "Shopify Theme Customization",
        "Liquid",
        "Public & Private Shopify App Development",
        "Shopify APIs",
        "Webhooks & Theme Extensions",
        "Storefront Architecture & Customization",
        "High-Traffic Store Management",
        "Performance Optimization",
        "Conversion Rate Optimization (CRO)",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "Liquid (Advanced)",
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "jQuery",
        "Responsive & Mobile-First Design",
        "Cross-Browser Compatibility",
      ],
    },
    {
      title: "Product & Delivery",
      skills: [
        "Product Strategy & Roadmapping",
        "Feature Planning & Prioritization",
        "UX Improvements & User Journey Optimization",
        "Stakeholder & Client Communication",
        "Requirement Gathering & Documentation",
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        "Git & GitHub",
        "Jira",
        "Trello",
        "Monday.com",
        "Slack",
        "Debugging & System Testing",
        "Code Reviews & Quality Standards",
        "Sprint Planning & Agile Execution",
        "Cross-Functional Collaboration",
      ],
    },
    {
      title: "Leadership & Soft Skills",
      skills: [
        "Team Leadership & Mentorship",
        "Clear Communication",
        "Ownership & Problem Solving",
        "Time & Priority Management",
      ],
    },
  ];

  return (
    <section className="max-w-5xl">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border border-gray-200 rounded-xl p-6 bg-white"
          >
            <h3 className="text-lg font-medium mb-4">
              {group.title}
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
