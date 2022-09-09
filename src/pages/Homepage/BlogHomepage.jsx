import React, { useEffect } from "react";
import {
  blogHomepageDelayVariant,
  fadeInVariant,
  motion
} from "assets/motion/motionVariants";
import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import TopArticle from "components/Blog/TopArticle/TopArticle";
import PageContainer from "components/PageContainer/PageContainer";
import { blog } from "mocks/data";
import styles from "./bloghomepage.module.scss";

function BlogHomepage() {
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
      <div className={styles.blogHomepage}>
        <AnimatedHeading>
          <h1>ideas & thoughts</h1>
        </AnimatedHeading>
        <motion.div
          variants={blogHomepageDelayVariant}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeInVariant}>
            <TopArticle artigo={blog.articles[0]} />
          </motion.div>
          <div>
            <motion.h2 variants={fadeInVariant} className="recent_post">
              Recent posts
            </motion.h2>
            <ArticlesGrid articles={blog.articles} />
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}

export default BlogHomepage;
