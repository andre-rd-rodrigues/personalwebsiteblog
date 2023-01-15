const SEARCH_TYPE = {
  category: "category",
  input: "input"
};

const CATEGORIES_TYPE = {
  tech: "technology",
  games: "gaming",
  wellbeing: "wellbeing",
  finance: "finance",
  top: "top",
  recent: "recent",
  career: "career",
  all: "all"
};

const CATEGORIES = [
  { name: "Top picks", type: CATEGORIES_TYPE.top },
  { name: "Latest", type: CATEGORIES_TYPE.recent },
  { name: "Wellbeing", type: CATEGORIES_TYPE.wellbeing },
  { name: "Finance", type: CATEGORIES_TYPE.finance },
  { name: "Career", type: CATEGORIES_TYPE.career },
  { name: "Technology", type: CATEGORIES_TYPE.tech },
  { name: "Gaming", type: CATEGORIES_TYPE.games },
  { name: "All", type: CATEGORIES_TYPE.all }
];

export { SEARCH_TYPE, CATEGORIES, CATEGORIES_TYPE };
