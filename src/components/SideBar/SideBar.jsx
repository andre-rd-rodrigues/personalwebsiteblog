import React from "react";
import { Icon } from "@iconify/react";
import SearchBar from "components/AppSearchBar/AppSearchBar";
import { blog } from "mocks/data";
import { push as Menu } from "react-burger-menu";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import "./blogsidebar.scss";

function SideBar() {
  const [, setSearchQuery] = useSearchParams({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (input) => {
    const inputTrimed = input.trim();

    if (!inputTrimed.length) return;

    if (!location.pathname.includes("search")) {
      return navigate(`/article/search?input=${inputTrimed}`);
    }

    return setSearchQuery({ input: inputTrimed });
  };

  return (
    <Menu
      customBurgerIcon={<Icon icon="octicon:sidebar-collapse-24" />}
      customCrossIcon={<Icon icon="octicon:sidebar-expand-24" />}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <div className="blog-sidebar-section">
        <SearchBar onSearch={(input) => handleSearch(input)} />
      </div>
      <div className="blog-sidebar-section">
        <h5>Categories</h5>
        <ul>
          {blog.categories.map((category, index) => (
            <Link key={index} to={`/article/search?category=${category.name}`}>
              <li>{category.display_name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Menu>
  );
}

export default SideBar;
