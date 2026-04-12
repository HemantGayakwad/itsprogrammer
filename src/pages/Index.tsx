import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Presentation, Code } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CountUp from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import ceoImg from "@/assets/ceo.jpg";
import seminar1 from "@/assets/seminar1.jpg";
import seminar2 from "@/assets/seminar2.jpg";
import seminar3 from "@/assets/seminar3.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
          >
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Java | Python | C++</span>
          </motion.div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight text-foreground">
            Become a <span className="text-primary text-glow">Pro Programmer</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Join 500+ students who transformed their careers with industry-ready coding skills at It's Programmer.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/courses">
              <Button size="lg" className="gradient-green text-primary-foreground font-semibold text-base px-8 hover:opacity-90">
                Explore Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold text-base px-8">
                About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* YouTube */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionTitle title="Watch & Learn" subtitle="Get a glimpse of what we teach" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-lg overflow-hidden border border-border box-glow"
        >
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Its Programmer"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <CountUp end={500} suffix="+" label="Students Trained" />
        <CountUp end={50} suffix="+" label="Seminars Conducted" />
        <CountUp end={15} suffix="+" label="Awards Won" />
        <CountUp end={10} suffix="+" label="Expert Mentors" />
      </div>
    </section>

    {/* Seminars */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionTitle title="Seminars & Events" subtitle="Knowledge sharing sessions across the country" />
        <div className="grid md:grid-cols-3 gap-6">
          {[seminar1, seminar2, seminar3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-lg overflow-hidden border border-border group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={img}
                  alt={`Seminar ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {["Tech Summit 2024", "Code Workshop", "Hackathon Event"][i]}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {["500+ attendees", "Hands-on learning", "Team collaboration"][i]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="py-20">
      <div className="container">
        <SectionTitle title="Awards & Recognition" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {["Best EdTech 2024", "Innovation Award", "Top Mentor Award", "Excellence in Teaching"].map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center p-6 rounded-lg border border-border bg-card hover:box-glow transition-shadow"
            >
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-xs font-medium text-foreground">{award}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CEO */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionTitle title="CEO & Founder" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg border border-border bg-background"
        >
          <div className="shrink-0">
            <img
              src={ceoImg}
              alt="CEO"
              className="w-40 h-40 rounded-full border-4 border-primary object-cover animate-pulse-glow"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">Rahul Sharma</h3>
            <p className="text-primary text-sm font-medium mt-1">Founder & CEO</p>
            <p className="text-muted-foreground text-sm mt-3">
              With 10+ years in the tech industry, Rahul founded It's Programmer to bridge the gap between academic learning and industry demands. His vision: making every student job-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
