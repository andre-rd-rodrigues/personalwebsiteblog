import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import useQuery from "hooks/useQuery";
import { getArticlesByCategory, getArticlesByInput, SEARCH_TYPE } from "utils";
import NoResults from "./NoResults";
import styles from "./resultspage.module.scss";

const ResultsPage = () => {
  const [articles, setArticles] = useState(undefined);
  const [type, value] = useQuery();

  const handleArticlesSearch = () => {
    let articlesSearched;

    if (value && type) {
      if (type === SEARCH_TYPE.input) {
        articlesSearched = getArticlesByInput(value);
      }
      if (type === SEARCH_TYPE.category) {
        articlesSearched = getArticlesByCategory(value);
      }

      setArticles(articlesSearched);
    }
  };

  //Lifecycle
  useEffect(() => {
    handleArticlesSearch();
  }, [value]);

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
          <NoResults searchValue={value} />
        )}
      </div>
    </PageContainer>
  );
};

export default ResultsPage;
