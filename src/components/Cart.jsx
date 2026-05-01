function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item) => (
        <p key={item.id}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default Cart;