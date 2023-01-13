import React from "react";
import AppImage from "components/AppImage/AppImage";
import AppLink from "components/AppLink/AppLink";
import { Col, Row } from "react-bootstrap";
import { READ_MORE_LABEL } from "utils/settings";
import styles from "./toparticle.module.scss";

const TopArticle = ({ article }) => {
  return (
    <Row className={styles.container}>
      <Col sm={12} lg={6}>
        <AppImage src={article.image_src} className={styles.image} />
      </Col>
      <Col sm={12} lg={6}>
        <div className={styles.date}>
          <p>{article.category}</p>
          <p>{article.date}</p>
        </div>
        <h3>{article.title}</h3>
        <p className="article_description">{article.description}</p>
        <div className="text-end">
          <AppLink label={READ_MORE_LABEL} to={`/article?id=${article.id}`} />
        </div>
      </Col>
    </Row>
  );
};

export default TopArticle;
