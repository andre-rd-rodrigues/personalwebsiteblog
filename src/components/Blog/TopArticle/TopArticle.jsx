import React from "react";
import AppImage from "components/AppImage/AppImage";
import AppLink from "components/AppLink/AppLink";
import styles from "./toparticle.module.scss";

const TopArticle = ({ artigo }) => {
  return (
    <div className={styles.container}>
      <AppImage src={artigo.image_src} className={styles.image} />
      <div className={styles.date}>
        <p>Lifestyle</p>
        <p>12, June 2022</p>
      </div>
      <h3>{artigo.title}</h3>
      <p className="article_description">{artigo.description}</p>
      <div className="text-end">
        <AppLink label="READ NOW" to="/" />
      </div>
    </div>
  );
};

export default TopArticle;
