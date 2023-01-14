import React from "react";
import { useState } from "react";
import { containerVariant, motion } from "assets/motion/motionVariants";
import AppButton from "components/AppButton/AppButton";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesgrid.module.scss";

const INITIAL_RENDER_LIMIT = 6;

const ArticlesGrid = ({ articles }) => {
  const [pagination, setPagination] = useState({
    articlesVisible: articles.slice(0, INITIAL_RENDER_LIMIT),
    total: articles?.length,
    visible: INITIAL_RENDER_LIMIT
  });

  const isLoadMoreButtonVisible = pagination.total > pagination.visible;

  const handleLoadMoreArticles = () => {
    const newRenderLimit = pagination.visible + 4;

    const newVisibleArticles = articles.slice(
      pagination.visible,
      newRenderLimit
    );

    if (newVisibleArticles) {
      setPagination((prevState) => {
        return {
          ...prevState,
          articlesVisible: [
            ...prevState.articlesVisible,
            ...newVisibleArticles
          ],
          visible: newRenderLimit
        };
      });
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={styles.grid}
      >
        {pagination.articlesVisible?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </motion.div>
      {isLoadMoreButtonVisible && (
        <AppButton onClick={handleLoadMoreArticles} label="load more" />
      )}
    </div>
  );
};

export default ArticlesGrid;
