import { useScroll } from "framer-motion";
import React from "react";
import styles from "./progressbar.module.scss";
import { motion } from "framer-motion";

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
