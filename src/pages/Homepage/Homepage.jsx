import React, { useEffect } from "react";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ArticlesSlider from "components/Articles/ArticlesSlider/ArticlesSlider";
import PageContainer from "components/PageContainer/PageContainer";
import { CATEGORIES_TYPE, getWeeklyArticles } from "utils";
import CategorySection from "./CategorySection";
import styles from "./homepage.module.scss";

function Homepage() {
  //Lifecycle
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <CategorySection categoryType={CATEGORIES_TYPE.recent} />
        <CategorySection categoryType={CATEGORIES_TYPE.tech} />
        <CategorySection categoryType={CATEGORIES_TYPE.wellbeing} />
      </div>
    </PageContainer>
  );
}

export default Homepage;