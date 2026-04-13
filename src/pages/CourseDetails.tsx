import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, BookOpen, CheckCircle2, ChevronDown, MessageCircle, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (idx: number) => {
    setOpenSections((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleEnroll = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in enrolling in the ${course?.title} course. Please share more details.`
    );
    window.open(`https://wa.me/919960717665?text=${message}`, "_blank");
  };

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

  // Upcoming course (Fullstack)
  if (course.isUpcoming) {
    return (
      <Layout>
        <section className="py-20 min-h-[70vh] flex items-center">
          <div className="container max-w-2xl text-center">
            <Link to="/courses">
              <Button variant="ghost" className="text-primary mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="p-10 rounded-2xl border border-primary/30 bg-card relative overflow-hidden"
            >
              {/* Animated background particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/20"
                    initial={{ x: Math.random() * 400, y: Math.random() * 400 }}
                    animate={{
                      y: [Math.random() * 400, Math.random() * 100, Math.random() * 400],
                      x: [Math.random() * 400, Math.random() * 200, Math.random() * 400],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <Rocket className="h-16 w-16 text-primary" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3"
              >
                {course.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-semibold">Coming Soon</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground text-lg mb-4"
              >
                This course is currently under development and will be available soon!
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-muted-foreground text-sm mb-8"
              >
                {course.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <BookOpen className="h-4 w-4 text-primary" /> {course.modules} Modules
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  onClick={handleEnroll}
                  className="gradient-green text-primary-foreground font-semibold text-base px-10 hover:opacity-90 gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Notified on WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
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

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> {course.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" /> {course.modules} Modules
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-lg overflow-hidden border border-border box-glow mb-10"
            >
              <div className="aspect-video">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>



              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-2xl font-bold text-foreground mb-6"
            >
              What You'll Learn
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {course.details.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:box-glow transition-all duration-300 cursor-default"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Detailed Curriculum */}
            {course.curriculum && course.curriculum.length > 0 && (
              <>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-heading text-2xl font-bold text-foreground mb-6"
                >
                  Detailed Curriculum
                </motion.h2>
                <div className="space-y-4 mb-12">
                  {course.curriculum.map((section, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="rounded-lg border border-border bg-card overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(sIdx)}
                        className="w-full flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors text-left"
                      >
                        <h3 className="font-heading text-lg font-bold text-primary">
                          {section.heading}
                        </h3>
                        <motion.div
                          animate={{ rotate: openSections[sIdx] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-5 w-5 text-primary" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openSections[sIdx] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 space-y-4">
                              {section.topics[0]?.description && (
                                <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                                  {section.topics[0].description}
                                </p>
                              )}
                              {section.topics.map((topic, tIdx) => (
                                <motion.div
                                  key={tIdx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: tIdx * 0.05 }}
                                  className="group"
                                >
                                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                                    <motion.div
                                      whileHover={{ scale: 1.2, rotate: 360 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                                    </motion.div>
                                    <div>
                                      <span className="text-sm font-semibold text-foreground">
                                        {topic.title}
                                      </span>
                                      {topic.points.map((point, pIdx) => (
                                        <p key={pIdx} className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                          {point}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* Enroll CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 p-6 rounded-xl border border-primary/30 bg-card text-center"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Message on WhatsApp No: <span className="text-primary font-semibold">+91 9960717665</span> to enroll in this course.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={handleEnroll}
                  className="gradient-green text-primary-foreground font-semibold text-base px-10 hover:opacity-90 gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enroll Now via WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetails;
