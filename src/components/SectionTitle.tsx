import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto h-1 w-20 gradient-green rounded-full" />
  </motion.div>
);

export default SectionTitle;
