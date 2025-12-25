import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Hero() {
  return (
    <section className="mb-24">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold mb-2 dark:text-white"
      >
        Ayushi Sharma
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="text-xl text-primary mb-4"
      >
        Senior Shopify Developer
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 max-w-xl"
      >
        I build high-converting, scalable Shopify stores with clean UI,
        optimized performance, and conversion-focused UX.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
        >
          Contact Me
           </a>
           <a
    href="/Ayushi_Sharma_Resume.pdf"
    download
    className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
  >
    Download Resume
  </a>   
      </motion.div>
    </section>
  );
}
