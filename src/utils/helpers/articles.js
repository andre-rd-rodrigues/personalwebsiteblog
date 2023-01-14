import { blog } from "mocks/data";
import { SEARCH_TYPE } from "utils/types";

const getRecentArticles = () => {};

const getTopArticles = () => {
  const articles = blog.articles.filter((item) => item.isTopArticle);

  return validateSearch(articles);
};

/**
 *  Function to get articles by input query string
 *  @param {string} input - The input query string
 */
const getArticlesByInput = (input) => {
  const articles = blog.articles.filter(
    (item) =>
      item.title.toLowerCase().includes(input) || item.category.includes(input)
  );

  return validateSearch(articles);
};

/**
 * Function to get articles by id
 * @param {string} id article id
 */
const getArticlesById = (id) => {
  return blog.articles.filter((item) => item.id === id)[0];
};

/**
 * Function to get articles according to category
 * @param category category string
 */

const getArticlesByCategory = (category) => {
  switch (category) {
    case "top":
      return getTopArticles();

    case "all":
      return blog.articles;

    case "recent":
      return blog.articles.slice(0, 3);

    default: {
      const articles = blog.articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      );

      return validateSearch(articles);
    }
  }
};

/**
 * Function to help validate articles array
 *  @param {Object[]} articles
 */
const validateSearch = (articles) => {
  if (!articles.length) return null;

  return articles;
};

export {
  getRecentArticles,
  getArticlesByCategory,
  getArticlesByInput,
  getArticlesById,
  getTopArticles
};
