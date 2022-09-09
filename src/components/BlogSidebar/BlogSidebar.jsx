import React from "react";
import AppIcon from "components/AppIcon/AppIcon";
import AppSearchBar from "components/AppSearchBar/AppSearchBar";
import { blog } from "mocks/data";
import { push as Menu } from "react-burger-menu";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import "./blogsidebar.scss";

function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useSearchParams({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (inputSearch) => {
    if (!location.pathname.includes("search")) {
      return navigate(`/artigo/search?input=${inputSearch}`);
    }
    return setSearchQuery({ input: inputSearch });
  };
  return (
    <Menu
      customBurgerIcon={<AppIcon icon="sidebar" color="dark" size={25} />}
      customCrossIcon={<AppIcon icon="x" color="dark" size={25} />}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <div className="blog-sidebar-section">
        <AppSearchBar onSearch={(inputSearch) => handleSearch(inputSearch)} />
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

export default BlogSidebar;
