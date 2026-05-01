import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apples", category: "Fruits" },
  { id: 4, name: "Bananas", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
  { id: 6, name: "Croissant", category: "Bakery" },
];

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
      <ProductList products={products} addToCart={addToCart} category={category} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;