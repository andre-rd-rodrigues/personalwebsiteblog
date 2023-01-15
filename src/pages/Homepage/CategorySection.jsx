import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import PropTypes from "prop-types";
import { CATEGORIES, getArticlesByCategory } from "utils";

const CategorySection = ({ categoryType }) => {
  // Create title according to category type
  const title = CATEGORIES.find(({ type }) => type === categoryType).name;

  return (
    <div style={{ marginBottom: "100px" }}>
      <motion.h2 variants={fadeInVariant} className="recent_post">
        {title}:
      </motion.h2>
      <ArticlesGrid articles={getArticlesByCategory(categoryType)} />
    </div>
  );
};

CategorySection.propTypes = {
  categoryType: PropTypes.string
};

export default CategorySection;
