import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { getArticleByTitle } from "utils";

const ArticleLink = ({ title }) => {
  const article = getArticleByTitle(title);

  if (!article) return "";

  return <Link to={`/article?id=${article.id}`}>{title}</Link>;
};

ArticleLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default ArticleLink;
