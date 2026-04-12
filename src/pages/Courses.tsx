import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const Courses = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <SectionTitle title="Our Courses" subtitle="Industry-ready programs to kickstart your career" />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((c) => (
            <CourseCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
