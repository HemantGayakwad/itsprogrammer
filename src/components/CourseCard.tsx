import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

const CourseCard = ({ id, title, image, description }: CourseCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="card-3d rounded-lg overflow-hidden border border-border bg-card"
  >
    <div className="relative overflow-hidden h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <Link to={`/courses/${id}`}>
        <Button className="w-full gradient-green text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          View Details
        </Button>
      </Link>
    </div>
  </motion.div>
);

export default CourseCard;
