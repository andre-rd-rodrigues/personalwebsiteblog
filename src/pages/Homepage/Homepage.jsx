import React, { useEffect } from "react";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import PageContainer from "components/PageContainer/PageContainer";
import { CATEGORIES_TYPE, getWeeklyArticles } from "utils";
import CategorySection from "./CategorySection";
import styles from "./homepage.module.scss";
import ArticlesSlider from "components/Articles/ArticlesSlider/ArticlesSlider";

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

        {/* Weekly */}
        <AnimatedHeading>
          <h2>This week:</h2>
        </AnimatedHeading>
        <ArticlesSlider weeklyArticles={getWeeklyArticles()} />

        <CategorySection categoryType={CATEGORIES_TYPE.tech} />
        <CategorySection categoryType={CATEGORIES_TYPE.wellbeing} />
      </div>
    </PageContainer>
  );
}

export default Homepage;
