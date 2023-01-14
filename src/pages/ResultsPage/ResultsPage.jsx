import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import { findArticlesByQuery, getArticles } from "utils";
import NoResults from "./NoResults";
import styles from "./resultspage.module.scss";

const ResultsPage = () => {
  const [articles, setArticles] = useState(undefined);
  const [searchQuery] = useSearchParams();

  //Lifecycle
  useEffect(() => {
    const querySearchObject = findArticlesByQuery(searchQuery);

    if (querySearchObject) {
      const searchedArticles = getArticles(querySearchObject);
      setArticles(searchedArticles);
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
          <ArticlesGrid key={articles} articles={articles} />
        ) : (
          <NoResults searchValue={findArticlesByQuery(searchQuery)?.value} />
        )}
      </div>
    </PageContainer>
  );
};

export default ResultsPage;
