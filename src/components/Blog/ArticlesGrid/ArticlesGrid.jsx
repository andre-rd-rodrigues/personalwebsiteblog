import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { containerVariant, motion } from "assets/motion/motionVariants";
import AppButton from "components/AppButton/AppButton";
import ArticlePreviewBlock from "../ArticlePreviewBlock/ArticlePreviewBlock";
import styles from "./articlesgrid.module.scss";

const ArticlesGrid = ({ articles }) => {
  const [pagination, setPagination] = useState({
    articles: undefined,
    total: articles?.length,
    visible: 6
  });

  const handleLoadMore = () => {
    let paginationCopy = { ...pagination };
    let newVisibleLimit = pagination.visible + 4;
    setPagination({ ...paginationCopy, visible: newVisibleLimit });
  };

  const loadMoreButtonVisible = () => {
    if (pagination.total <= pagination.visible) return null;
    return <AppButton onClick={handleLoadMore} label="load more" />;
  };

  //Lifecycle
  useEffect(() => {
    const paginationCopy = { ...pagination };

    setPagination({
      ...paginationCopy,
      articles: articles.slice(0, pagination.visible)
    });
  }, [articles]);

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className={styles.grid}
        viewport={{ once: true }}
      >
        {pagination.articles?.map((artigo) => (
          <ArticlePreviewBlock key={artigo.id} artigo={artigo} />
        ))}
      </motion.div>
      {loadMoreButtonVisible()}
    </div>
  );
};

export default ArticlesGrid;
