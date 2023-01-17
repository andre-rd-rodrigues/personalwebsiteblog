import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import styles from "./appsearchbar.module.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const AppSearchBar = ({ className = "" }) => {
  const [searchValue, setSearchValue] = useState("");

  const [, setSearchQuery] = useSearchParams({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const inputTrimed = searchValue.trim();

    if (!inputTrimed.length) return;

    if (!location.pathname.includes("search")) {
      return navigate(`/article/search?input=${inputTrimed}`);
    }

    return setSearchQuery({ input: inputTrimed });
  };
  return (
    <form
      className={`${className} ${styles.container}`}
      onSubmit={handleSearch}
    >
      <label>
        <AppIcon icon="search" size={19} role="button" type="submit" />
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search here..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </label>
    </form>
  );
};

export default AppSearchBar;
