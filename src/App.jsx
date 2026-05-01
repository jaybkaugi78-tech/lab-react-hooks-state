import { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("All");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>
      <ProductList products={sampleProducts} addToCart={addToCart} category={category} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;