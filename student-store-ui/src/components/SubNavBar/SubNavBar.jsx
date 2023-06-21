
import React, { useState } from "react";
import "./SubNavbar.css";

const SubNavbar = ({ onSearch, onCategoryFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryFilter(category);
  };

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>
              Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart
                <i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu open">
            <li
              className={activeCategory === "All Categories" ? "is-active" : ""}
            >
              <button onClick={() => handleCategoryClick("All Categories")}>
                All Categories
              </button>
            </li>
            <li
              className={activeCategory === "clothing" ? "is-active" : ""}
            >
              <button onClick={() => handleCategoryClick("clothing")}>
                Clothing
              </button>
            </li>
            <li className={activeCategory === "food" ? "is-active" : ""}>
              <button onClick={() => handleCategoryClick("food")}>Food</button>
            </li>
            <li
              className={activeCategory === "accessories" ? "is-active" : ""}
            >
              <button onClick={() => handleCategoryClick("accessories")}>
                Accessories
              </button>
            </li>
            <li className={activeCategory === "tech" ? "is-active" : ""}>
              <button onClick={() => handleCategoryClick("tech")}>Tech</button>
            </li>
          </ul>
        </div>


        
      </div>
    </nav>
  );
};

export default SubNavbar;

