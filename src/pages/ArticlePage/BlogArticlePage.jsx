import React from "react";
import { useEffect, useState } from "react";
import Icon from "components/AppIcon/AppIcon";
import Image from "components/AppImage/AppImage";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import { getArticleById } from "utils/blog-utils";
import styles from "./blogarticlepage.module.scss";

const BlogArticlePage = () => {
  const [artigo, setArticle] = useState(undefined);
  const [searchParams] = useSearchParams();

  const articleId = searchParams.get("id");

  //Lifecycle
  useEffect(() => {
    if (articleId) {
      window.scrollTo(0, 0);
      setArticle(getArticleById(articleId));
    }
  }, []);

  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.container}>
        <Icon
          icon="arrow-left"
          size={30}
          color="grey"
          onClick={() => window.history.back()}
        />
        <div>
          <div className={styles.title}>
            <h1>{artigo?.title}</h1>
            <div className={styles.subtitle}>
              <p>{artigo?.date}</p> <span>|</span> <p>{artigo?.category}</p>
            </div>
          </div>
          <Image className={styles.mainImage} src={artigo?.image_src} />
          <div className={styles.contentContainer}>{artigo?.content}</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default BlogArticlePage;
