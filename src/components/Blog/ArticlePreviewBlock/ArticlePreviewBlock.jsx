import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AppImage from "components/AppImage/AppImage";
import AppLink from "components/AppLink/AppLink";
import { Link } from "react-router-dom";
import styles from "./articlepreviewblock.module.scss";

const ArticlePreviewBlock = ({ artigo }) => {
  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <div className={styles.wrapper}>
        <Link to={`/article?id=${artigo.id}`}>
          <AppImage src={artigo.image_src} className={styles.image} />
          <div className={styles.subtitle}>
            <p>{artigo.category}</p>
            <p>{artigo.date}</p>
          </div>
          <div className={styles.body}>
            <h5>{artigo.title}</h5>
            <p>{artigo.description}</p>
          </div>
          <div className={styles.footer}>
            <AppLink label="ler mais" to={`/article?id=${artigo.id}`} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticlePreviewBlock;
