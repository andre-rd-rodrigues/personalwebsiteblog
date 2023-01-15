import React, { useEffect } from "react";
import {
  HomepageDelayVariant,
  fadeInVariant,
  motion
} from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import TopArticle from "components/Blog/TopArticle/TopArticle";
import PageContainer from "components/PageContainer/PageContainer";
import { getRecentArticles } from "utils";
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
      {/* Relevant */}
      <div className={styles.Homepage} id="top-article">
        <AnimatedHeading>
          <h2>This week:</h2>
        </AnimatedHeading>
        <motion.div
          variants={HomepageDelayVariant}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeInVariant}>
            <TopArticle article={weeklyArticle} />
          </motion.div>

          {/* Recent */}
          <div>
            <motion.h2
              id="homepage-recent-articles"
              variants={fadeInVariant}
              className="recent_post"
            >
              The latest:
            </motion.h2>
            <ArticlesGrid articles={recentArticles.slice(1)} />
          </div>

          {/* Recent */}
        </motion.div>
      </div>
    </PageContainer>
  );
}

export default Homepage;
