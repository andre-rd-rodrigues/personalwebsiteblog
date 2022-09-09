import React from "react";
import { useEffect, useState } from "react";
import Icon from "components/AppIcon/AppIcon";
import Image from "components/AppImage/AppImage";
import MetaTags from "components/MetaTags/MetaTags";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import { getArticleById } from "utils/blog-utils";
import styles from "./blogarticlepage.module.scss";

const BlogArticlePage = () => {
  const [article, setArticle] = useState(undefined);
  const [searchParams] = useSearchParams();

  const articleId = searchParams.get("id");

  //Lifecycle
  useEffect(() => {
    if (articleId) {
      setArticle(getArticleById(articleId));
    }
  }, []);

  return (
    <>
      <MetaTags
        title={article?.title}
        description={article?.tags.description}
        keywords={article?.tags.keywords}
      />
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
              <h1>{article?.title}</h1>
              <div className={styles.subtitle}>
                <p>{article?.date}</p> <span>|</span> <p>{article?.category}</p>
              </div>
            </div>
            <Image className={styles.mainImage} src={article?.image_src} />
            <div className={styles.contentContainer}>{article?.content}</div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default BlogArticlePage;
