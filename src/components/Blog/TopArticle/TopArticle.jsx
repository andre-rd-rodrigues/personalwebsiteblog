import React from "react";
import AppImage from "components/AppImage/AppImage";
import AppLink from "components/AppLink/AppLink";
import styles from "./toparticle.module.scss";

const TopArticle = ({ article }) => {
  return (
    <div className={styles.container}>
      <AppImage src={article.image_src} className={styles.image} />
      <div className={styles.date}>
        <p>{article.category}</p>
        <p>{article.date}</p>
      </div>
      <h3>{article.title}</h3>
      <p className="article_description">{article.description}</p>
      <div className="text-end">
        <AppLink label="ler mais" to={`/article?id=${article.id}`} />
      </div>
    </div>
  );
};

export default TopArticle;
