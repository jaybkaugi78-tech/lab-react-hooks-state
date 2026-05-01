import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
  { id: 6, name: "Croissant", category: "Bakery" },
];

function ProductList({ products, addToCart, category }) {
  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      {filtered.length === 0 ? (
        <p>No products available.</p>
      ) : (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
}

export default ProductList;