import { articles } from "mocks/data";

/**
 *  Function that sorts articles by date and returns the first 5 articles
 */
const getRecentArticles = () => {
  const articlesSorted = [...articles];

  articlesSorted.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return articlesSorted;
};

/**
 *  Function that filters articles and returns the ones with isTopArticle
 */
const getTopArticles = () => {
  const articles = articles.filter((item) => item.isTopArticle);

  return validateSearch(articles);
};

/**
 *  Function to get articles by input query string
 *  @param {string} input - The input query string
 */
const getArticlesByInput = (input) => {
  const articles = articles.filter(
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
  return articles.filter((item) => item.id === id)[0];
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
      return articles;

    case "recent":
      return getRecentArticles();

    default: {
      const filteredArticles = articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      );

      return validateSearch(filteredArticles);
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
