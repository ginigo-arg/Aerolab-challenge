import { motion } from "framer-motion";
export default function Slide() {
  const variants: any = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: 0.5 },
  };
  return (
    <div className="relative">
      <img className="object-cover" src="/images/header-x1.png" alt="slide" />
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        className="absolute bottom-5 text-2xl lg:bottom-28 tracking-wider left-5 lg:left-10 lg:text-6xl text-white font-extrabold"
      >
        Electronics
      </motion.h1>
    </div>
  );
}
