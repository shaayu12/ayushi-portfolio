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
        
      <p className="text-gray-700 leading-relaxed mb-4">
      I am a Senior Shopify Developer with over 6 years of hands-on experience in
      building, customizing, and optimizing Shopify eCommerce stores and applications.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
      My expertise includes custom theme development using Liquid, HTML, CSS, JavaScript,
      and jQuery, along with developing both public and private Shopify apps to extend
      store functionality.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
      I have worked extensively on Shopify APIs, third-party integrations, performance
      optimization, and conversion-focused UX improvements. I collaborate closely with
      designers, project managers, and clients to deliver scalable and reliable solutions
      for international brands.
      </p>

    </motion.section>
  );
}
