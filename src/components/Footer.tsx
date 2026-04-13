import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "@/data/images";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container grid gap-8 md:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="Its Programmer" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-lg font-bold text-primary">IT'S PROGRAMMER</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Empowering the next generation of developers with industry-ready skills in Frontend, Backend & Technologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h4 className="font-heading text-sm font-semibold mb-4 text-primary">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {[
            { label: "Home", path: "/" },
            { label: "Courses", path: "/courses" },
            { label: "About Us", path: "/about" },
          ].map((l) => (
            <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 inline-block">
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="font-heading text-sm font-semibold mb-4 text-primary">Contact</h4>
        <p className="text-sm text-muted-foreground">Email: itsprogrammer15@gmail.com</p>
        <p className="text-sm text-muted-foreground">Phone: +91 9960717665</p>
      </motion.div>
    </div>
    <div className="container mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} It's Programmer. All rights reserved.
    </div>
  </footer>
);

export default Footer;
