import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  isUpcoming?: boolean;
}

const CourseCard = ({ id, title, image, description, isUpcoming }: CourseCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="card-3d rounded-lg overflow-hidden border border-border bg-card group"
  >
    <div className="relative overflow-hidden h-48">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover filter brightness-90 contrast-110 saturate-110"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      {isUpcoming && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
          Coming Soon
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <Link to={`/courses/${id}`}>
        <Button className="w-full gradient-green text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          {isUpcoming ? "View Details" : "View Details"}
        </Button>
      </Link>
    </div>
  </motion.div>
);

export default CourseCard;
