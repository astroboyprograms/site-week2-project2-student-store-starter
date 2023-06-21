



import * as React from "react";
import { useState } from "react";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Home.css"
import SubNavbar from "../SubNavBar/SubNavBar";
import Footer from "../Footer/Footer";
import HappyPerson from "../HappyPerson/HappyPerson.svg";
import GiantLogo from "../GiantLogo/GiantLogo.svg";
import Contact from "../Contact /Contact";

export default function Home({ products, handleAddItemToCart, handleRemoveItemFromCart }) {
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to handle search
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Function to handle category filter
  const handleCategoryFilter = (category) => {
    if (category === "All Categories") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home">
      <Hero />
      <SubNavbar onSearch={handleSearch} onCategoryFilter={handleCategoryFilter} />

      <ProductGrid 
        products={filteredProducts} 
        onAddItemToCart={handleAddItemToCart} 
        onRemoveItemFromCart={handleRemoveItemFromCart} 
      />

      {/* About section */}
      <div className="about" id="About">
        <div className="content">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div className="media">
              <img src= {GiantLogo} alt="codepath large" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
        <Contact />
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

