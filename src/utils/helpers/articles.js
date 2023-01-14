import { blog } from "mocks/data";
import { SEARCH_OBJECT } from "utils/types";

const getRecentArticles = () => {};

const getTopArticles = () => {
  const articles = blog.articles.filter((item) => item.isTopArticle);

  return validatedResults(articles);
};

/**
 *  Function to get articles by search object
 *  @param {Object} searchObject - The search data object, composed by type and value
 *  @param {string} searchObject.type - The query type that can be by category or input
 *  @param {string} searchObject.value - The search value
 */
const getArticles = (searchObject) => {
  if (searchObject.type === SEARCH_OBJECT.category) {
    if (searchObject.value === "top") return getTopArticles();
    if (searchObject.value === "all") return blog.articles;
    if (searchObject.value === "recent") return blog.articles.slice(0, 3);
    return getArticlesByCategory(searchObject.value);
  }

  if (searchObject.type === "input") {
    const articles = blog.articles.filter(
      (item) =>
        item.title.toLowerCase().includes(searchObject.value) ||
        item.category.includes(searchObject.value)
    );
    return validatedResults(articles);
  }
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
  const articles = blog.articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );

  return validatedResults(articles);
};

/**
 * Function that returns readable object with searched value
 *  @param {URLSearchParams} searchParams
 */

const findArticlesByQuery = (searchParams) => {
  let result = {};

  // 1. Check search type - input | category
  const input = searchParams.get("input");
  const category = searchParams.get("category");

  if (!input && !category) return null;

  if (input) {
    result.type = "input";
    result.value = input;
  }

  if (category) {
    result.type = "category";
    result.value = category;
  }

  return result;
};

/**
 * Function to help validate articles array
 *  @param {Object[]} articles
 */
const validatedResults = (articles) => {
  if (!articles.length) return null;
  return articles;
};

export {
  getRecentArticles,
  getArticlesByCategory,
  getArticles,
  getArticlesById,
  getTopArticles,
  findArticlesByQuery
};
