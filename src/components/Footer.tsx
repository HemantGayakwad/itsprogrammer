import { Link } from "react-router-dom";
import { IMAGES } from "@/data/images";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container grid gap-8 md:grid-cols-3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="Its Programmer" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-lg font-bold text-primary">IT'S PROGRAMMER</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Empowering the next generation of developers with industry-ready skills in Java, Python & C++.
        </p>
      </div>

      <div>
        <h4 className="font-heading text-sm font-semibold mb-4 text-primary">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {[
            { label: "Home", path: "/" },
            { label: "Courses", path: "/courses" },
            { label: "About Us", path: "/about" },
          ].map((l) => (
            <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading text-sm font-semibold mb-4 text-primary">Contact</h4>
        <p className="text-sm text-muted-foreground">Email: info@itsprogrammer.com</p>
        <p className="text-sm text-muted-foreground">Phone: +91 98765 43210</p>
      </div>
    </div>
    <div className="container mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} It's Programmer. All rights reserved.
    </div>
  </footer>
);

export default Footer;
