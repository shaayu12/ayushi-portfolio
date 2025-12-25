import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-10 text-center bg-gray-50 dark:bg-gray-800"
    >
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="linkedin.com/in/ayushi-sharma-1b692914b"
          target="_blank"
          className="hover:text-primary transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:sharmaayushi664@gmail.com"
          className="hover:text-primary transition"
        >
          Email
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Ayushi Sharma. All rights reserved.
      </p>
    </motion.footer>
  );
}
