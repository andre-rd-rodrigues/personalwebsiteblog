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

  const handleSearch = (inputSearch) => {
    if (!location.pathname.includes("search")) {
      return navigate(`/article/search?input=${inputSearch}`);
    }
    return setSearchQuery({ input: inputSearch });
  };
  return (
    <Menu
      customBurgerIcon={<Icon icon="octicon:sidebar-collapse-24" />}
      customCrossIcon={<Icon icon="octicon:sidebar-expand-24" />}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <div className="blog-sidebar-section">
        <SearchBar onSearch={(inputSearch) => handleSearch(inputSearch)} />
      </div>
      <div className="blog-sidebar-section">
        <h5>Categories</h5>
        <ul>
          {blog.categories.map((item, index) => (
            <Link key={index} to={`/artigo/search?category=${item.name}`}>
              <li>{item.display_name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Menu>
  );
}

export default SideBar;
