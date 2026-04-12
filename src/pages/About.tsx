import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { IMAGES } from "@/data/images";

const team = [
  { name: "Hemant Gayakwad", role: "Founder & CEO", image: IMAGES.ceo, desc: "6+ years in tech, passionate about education and empowering developers." },
  { name: "Akash Mahajan", role: "Lead Instructor", image: IMAGES.team1, desc: "Relational Team Head have 5+ years of experience to Manage the Team" },
  { name: "Vaishnavi Salunkhe", role: "Carrier Mentor", image: IMAGES.team2, desc: "EdTech specialist creating industry-aligned courses for maximum impact. And Guied Students for brightest Future." },
];

const About = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <SectionTitle title="About Us" subtitle="Our mission is to create world-class developers" />

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-lg overflow-hidden border border-border box-glow mb-16">
          <div className="aspect-video">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="About Its Programmer" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-muted-foreground leading-relaxed">
            It's Programmer was founded with a single goal — to make programming accessible and career-oriented for every aspiring developer. 
            With hands-on projects, expert mentors, and a community of 500+ alumni, we've helped students land roles at top tech companies.
          </p>
        </motion.div>

        <SectionTitle title="Our Team" subtitle="Meet the people behind It's Programmer" />
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -8 }} className="text-center p-6 rounded-lg border border-border bg-card hover:box-glow transition-all">
              <img src={m.image} alt={m.name} className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-primary object-cover filter brightness-95 contrast-110 saturate-110 transition-all duration-300 hover:brightness-105 hover:scale-105" loading="lazy" />
              <h3 className="font-heading text-base font-bold text-foreground">{m.name}</h3>
              <p className="text-primary text-xs font-medium mt-1">{m.role}</p>
              <p className="text-muted-foreground text-sm mt-3">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
