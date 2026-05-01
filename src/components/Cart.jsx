function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default Cart;