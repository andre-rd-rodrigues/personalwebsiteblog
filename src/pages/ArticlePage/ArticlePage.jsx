import React from "react";
import { useEffect, useState } from "react";
import Icon from "components/AppIcon/AppIcon";
import Image from "components/AppImage/AppImage";
import MetaTags from "components/MetaTags/MetaTags";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import "./blogarticlepage.scss";
import { getArticlesById } from "utils";
import { convertDate } from "utils/helpers/date";
import ProgressBar from "components/ProgressBar/ProgressBar";

const BlogArticlePage = () => {
  const [article, setArticle] = useState(undefined);
  const [searchParams] = useSearchParams();

  const articleId = searchParams.get("id");

  //Lifecycle
  useEffect(() => {
    if (articleId) {
      setArticle(getArticlesById(articleId));
    }
  }, [articleId]);

  return (
    <>
      <MetaTags
        title={article?.title}
        description={article?.description}
        image={article?.image_src}
      />
      <ProgressBar />
      <PageContainer color="dark" bgColor="grey-yellow">
        <div className="article-container">
          <Icon
            icon="arrow-left"
            size={30}
            color="grey"
            className="arrow-back"
            onClick={() => window.history.back()}
          />
          <div>
            <div>
              <h1 className="title">{article?.title}</h1>
              <div className="subtitle">
                <p>{convertDate(article?.date)}</p> <span>|</span>{" "}
                <p>{article?.category}</p>
              </div>
            </div>
            <Image className="header-image" src={article?.image_src} />
            <div className="body-container">{article?.content}</div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default BlogArticlePage;
