import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function About() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        
      {/* <p className="text-gray-700 leading-relaxed mb-4">
      I am a Senior Shopify Developer with over 6 years of hands-on experience in
      building, customizing, and optimizing Shopify eCommerce stores and applications.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
      My expertise includes custom shopify website development using Liquid, HTML, CSS, JavaScript,
      and jQuery, along with developing both public and private Shopify apps to extend
      store functionality.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
      I have worked extensively on Shopify APIs, third-party integrations, performance
      optimization, and conversion-focused UX improvements. I collaborate closely with
      designers, project managers, and clients to deliver scalable and reliable solutions
      for international brands.
      </p> */}

      <p className="text-gray-700 leading-relaxed mb-4">I’m a Product Manager with over 6 years of experience working on eCommerce products and digital platforms. I enjoy figuring out what problems are actually worth solving and working with teams to turn those ideas into features that users find genuinely useful.</p>
      <p className="text-gray-700 leading-relaxed mb-4">I work closely with engineering, design, and business teams to define requirements, prioritize work, and move ideas from concept to launch. I’m comfortable navigating ambiguity, asking the right questions, and making trade-offs that balance user experience, technical constraints, and business goals.</p>
      <p className="text-gray-700 leading-relaxed mb-4">Over the years, I’ve been involved in improving user journeys, performance, and conversion flows, often through small, thoughtful changes that add up to meaningful impact. I like owning things end to end — from early discovery and planning to shipping, learning from feedback, and iterating on what we’ve built.</p>
      <p className="text-gray-700 leading-relaxed mb-4">I’m currently looking for a full-time Product Manager role where I can work on meaningful products, collaborate with strong cross-functional teams, and continue growing as a product professional.</p>

    </motion.section>
  );
}
