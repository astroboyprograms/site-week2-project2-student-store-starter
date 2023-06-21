import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound"; 
import Hero from "../Hero/Hero";
import "../../globals.css";
import "./App.css";



export default function App() {
  // State definitions
  const [products, setProducts] = useState([]);
  const [productsWithSearch, setProductsWithSearch] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const ProductListWithSearch = (search)=>{
    if(search.length>0){
    let searchArr = []
    search = search.toUpperCase()
    products.forEach((el)=>{
         if((el.name+el.discription).toUpperCase().includes(search)){
          searchArr.push(el)
          }   
    })
    setProductsWithSearch(searchArr);
  }else{
    setProductsWithSearch(products);
  }
}

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get("https://codepath-store-api.herokuapp.com/store");
        if (res?.data?.products) {
          setProducts(res.data.products);
          setProductsWithSearch(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, []);

  // Handler to toggle Sidebar state
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handler to add an item to shopping cart
  const handleAddItemToCart = (productId) => {
    setShoppingCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.itemId === productId ? {...item, quantity: item.quantity + 1} : item
      );

      if (!updatedCart.find(item => item.itemId === productId)) {
        updatedCart.push({itemId: productId, quantity: 1});
      }
      
      return updatedCart;
    });
  };

  // Handler to remove an item from shopping cart
  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart(prevCart =>
      prevCart
        .map(item =>
          item.itemId === productId && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item
        )
        .filter(item => item.quantity > 0 && item.itemId !== productId)
    );
  };

  // Handler to update checkout form
  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  // Handler to submit checkout form
  const handleOnSubmitCheckoutForm = async () => {
    const order = {
      user: {
        name: checkoutForm.name,
        email: checkoutForm.email
      },
      shoppingCart
    };

    try {
      const response = await axios.post('https://codepath-store-api.herokuapp.com/store', order);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <main>
      <BrowserRouter>
        <Navbar />
        <Sidebar isOpen={isOpen} setIsOpen={handleOnToggle} />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  products={productsWithSearch} 
                  isFetching={isFetching} 
                  error={error} 
                  onAddItemToCart={handleAddItemToCart} 
                />} 
            />
            <Route 
              path="/products/:productId" 
              element={
                <ProductDetail 
                products={products}
                shoppingCart={shoppingCart} 
                onAddItemToCart={handleAddItemToCart} 
                onRemoveItemFromCart={handleRemoveItemFromCart} 
                />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>

      </main>
      
    </div>
  );
}

