import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, category }) {
  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;