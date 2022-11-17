import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import { findArticlesByQuery, getArticles } from "utils/tools";
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
        <h1>Resultados:</h1>
        {articles ? (
          <ArticlesGrid articles={articles} />
        ) : (
          <div className={styles.notFound}>
            <p>
              Não foram encontrados resultados para:{" "}
              <span>{findArticlesByQuery(searchQuery).value}</span>
              <br />
            </p>
            <p>Confirma que escreveste bem a palavra na barra de pesquisa.</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default ResultsPage;
