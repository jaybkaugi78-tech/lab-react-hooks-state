function ProductCard({ product, addToCart }) {
  return (
    <div data-testid={`product-${product.id}`}>
      <p>{product.name}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;