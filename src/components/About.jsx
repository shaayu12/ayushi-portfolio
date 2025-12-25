import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function About() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        I’m a Senior Shopify Developer with 5+ years of experience building,
        customizing, and optimizing Shopify stores for growing brands
        and startups.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        My expertise includes custom Shopify theme development, UI/UX
        improvements, speed optimization, and conversion-focused development.
      </p>

      <p className="text-gray-700 leading-relaxed">
        I work closely with founders, designers, and marketing teams to
        deliver reliable and scalable eCommerce solutions.
      </p>
    </motion.section>
  );
}
