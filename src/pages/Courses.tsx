import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Courses = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <SectionTitle title="Our Courses" subtitle="Industry-ready programs to kickstart your career" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {courses.map((c) => (
            <motion.div key={c.id} variants={itemVariants}>
              <CourseCard {...c} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Courses;
