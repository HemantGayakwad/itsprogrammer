import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-2xl text-foreground">Course not found</h1>
          <Link to="/courses" className="text-primary mt-4 inline-block">← Back to Courses</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link to="/courses">
            <Button variant="ghost" className="text-primary mb-6 hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              {course.title}
            </h1>
            <p className="text-muted-foreground mb-8">{course.description}</p>

            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> {course.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" /> {course.modules} Modules
              </div>
            </div>

            {/* Video */}
            <div className="rounded-lg overflow-hidden border border-border box-glow mb-10">
              <div className="aspect-video">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Curriculum */}
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.details.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:box-glow transition-shadow"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button size="lg" className="gradient-green text-primary-foreground font-semibold text-base px-10 hover:opacity-90">
                Enroll Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetails;
