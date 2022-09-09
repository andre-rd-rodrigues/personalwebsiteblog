import React from "react";
import { Icon } from "@iconify/react";
import PageContainer from "components/PageContainer/PageContainer";
import styles from "./pagenotfound.module.scss";

const PageNotFound = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Página não encontrada.</h2>
        <p>
          A página que procuras pode ter sido removida ou o link que colocaste
          não corresponde a nenhuma página existente.
        </p>
        <button
          className={styles.backButton}
          onClick={() => window.history.back()}
        >
          <Icon
            icon="heroicons:arrow-long-left-solid"
            style={{ fontSize: "40px" }}
          />
          VOLTAR
        </button>
      </div>
    </PageContainer>
  );
};

export default PageNotFound;
