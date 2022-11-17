import { blog } from "mocks/data";

const getRecentArticles = () => {};

const getTopArticles = () => {
  const articles = blog.articles.filter((item) => item.isTopArticle);

  return validatedResults(articles);
};

const getArticlesByCategory = (category) => {
  const articles = blog.articles.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return validatedResults(articles);
};

const getArticles = (searchObject) => {
  if (searchObject.type === "category") {
    if (searchObject.value === "top") return getTopArticles();
    if (searchObject.value === "all") return blog.articles;
    if (searchObject.value === "recent") return blog.articles.slice(0, 3);
    return getArticlesByCategory(searchObject.value);
  }

  if (searchObject.type === "input") {
    const articles = blog.articles.filter(
      (item) =>
        item.title.includes(searchObject.value) ||
        item.category.includes(searchObject.value)
    );
    return validatedResults(articles);
  }
};

const getArticlesById = (id) => {
  return blog.articles.filter((item) => item.id === id)[0];
};

const findArticlesByQuery = (searchQuery) => {
  let result = {};

  // 1. Check search type - input || category
  const input = searchQuery.get("input");
  const category = searchQuery.get("category");

  if (!input && !category) return null;

  if (input) {
    result.type = "input";
    result.value = input;
  }
  if (category) {
    result.type = "category";
    result.value = category;
  }

  // 2. Returns readable object with searched value
  return result;
};

const validatedResults = (articles) => {
  console.log(articles);
  if (articles.length === 0) return null;
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
