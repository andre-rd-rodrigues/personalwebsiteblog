import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import { findArticlesByQuery, getArticles } from "utils";
import styles from "./resultspage.module.scss";

const ResultsPage = () => {
  const [articles, setArticles] = useState(undefined);
  const [searchQuery] = useSearchParams();

  //Lifecycle
  useEffect(() => {
    const articlesByQuery = findArticlesByQuery(searchQuery);

    if (articlesByQuery) {
      setArticles(getArticles(articlesByQuery));
    }
  }, [searchQuery]);

  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.results}>
        <h1>Results:</h1>

        {articles ? (
          <ArticlesGrid articles={articles} />
        ) : (
          <div className={styles.notFound}>
            <p>
              Sorry, no results found for:{" "}
              <span>{findArticlesByQuery(searchQuery).value}</span>
              <br />
            </p>
            <p>
              Try different keywords and make sure all words are spelled
              correctly.
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default ResultsPage;
