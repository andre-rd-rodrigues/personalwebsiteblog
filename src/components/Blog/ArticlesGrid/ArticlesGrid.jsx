import React from "react";
import { useState } from "react";
import { containerVariant, motion } from "assets/motion/motionVariants";
import AppButton from "components/AppButton/AppButton";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesgrid.module.scss";
import { useEffect } from "react";

const INITIAL_RENDER_LIMIT = 6;

const ArticlesGrid = ({ articles }) => {
  const [articlesState, setArticlesState] = useState({
    articlesVisible: articles.slice(0, INITIAL_RENDER_LIMIT),
    visible: INITIAL_RENDER_LIMIT
  });

  const isLoadMoreButtonVisible = articles.total > articlesState.visible;

  const handleLoadMoreArticles = () => {
    const newRenderLimit = articlesState.visible + 4;

    const newVisibleArticles = articles.slice(
      articlesState.visible,
      newRenderLimit
    );

    if (newVisibleArticles) {
      setArticlesState((prevState) => {
        return {
          articlesVisible: [
            ...prevState.articlesVisible,
            ...newVisibleArticles
          ],
          visible: newRenderLimit
        };
      });
    }
  };

  useEffect(() => {
    if (articles) {
      setArticlesState({
        articlesVisible: articles.slice(0, INITIAL_RENDER_LIMIT),
        visible: INITIAL_RENDER_LIMIT
      });
    }
  }, [articles]);

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={styles.grid}
      >
        {articlesState.articlesVisible?.map((article) => (
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
