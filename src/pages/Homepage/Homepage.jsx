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
import { blog } from "mocks/data";
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
      <div className={styles.Homepage} id="top-article">
        <AnimatedHeading>
          <h1>Relevante:</h1>
        </AnimatedHeading>
        <motion.div
          variants={HomepageDelayVariant}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeInVariant}>
            <TopArticle article={blog.articles[0]} />
          </motion.div>
          <div>
            <motion.h2
              id="homepage-recent-articles"
              variants={fadeInVariant}
              className="recent_post"
            >
              Artigos recentes:
            </motion.h2>
            <ArticlesGrid articles={blog.articles} />
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}

export default Homepage;
