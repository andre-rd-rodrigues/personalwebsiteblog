import React, { useEffect } from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import TopArticle from "components/Blog/TopArticle/TopArticle";
import PageContainer from "components/PageContainer/PageContainer";
import { CATEGORIES_TYPE, getRecentArticles } from "utils";
import CategorySection from "./CategorySection";
import styles from "./homepage.module.scss";

function Homepage() {
  const recentArticles = getRecentArticles();

  const weeklyArticle = recentArticles[0];

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
      {/* First section */}
      <div className={styles.Homepage} id="top-article">
        <AnimatedHeading>
          <h2>This week:</h2>
        </AnimatedHeading>

        {/*   TopArticle */}
        <motion.div variants={fadeInVariant}>
          <TopArticle article={weeklyArticle} />
        </motion.div>

        {/*   Sections */}
        <CategorySection categoryType={CATEGORIES_TYPE.recent} />
        <CategorySection categoryType={CATEGORIES_TYPE.tech} />
        <CategorySection categoryType={CATEGORIES_TYPE.wellbeing} />
      </div>
    </PageContainer>
  );
}

export default Homepage;
