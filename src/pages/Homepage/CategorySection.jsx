import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import PropTypes from "prop-types";
import { CATEGORIES, getArticlesByCategory } from "utils";

const CategorySection = ({ categoryType }) => {
  // Create title according to category type
  const title = CATEGORIES.find(({ type }) => type === categoryType).name;

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ marginBottom: "100px" }}
    >
      <motion.h2 className="recent_post">{title}:</motion.h2>
      <ArticlesGrid articles={getArticlesByCategory(categoryType)} />
    </motion.div>
  );
};

CategorySection.propTypes = {
  categoryType: PropTypes.string
};

export default CategorySection;
