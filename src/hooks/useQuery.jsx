import { useSearchParams } from "react-router-dom";

function useQuery() {
  const [searchQuery] = useSearchParams();

  let queryState = [];

  const input = searchQuery.get("input");
  const category = searchQuery.get("category");

  if (!input && !category) [null, null];

  if (input) {
    queryState.push("input", input);
  } else if (category) {
    queryState.push("category", category);
  }

  return queryState;
}

export default useQuery;
