import React from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./progressbar.module.scss";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.container}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
