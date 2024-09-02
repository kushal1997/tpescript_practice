import { useCartDispatch, useCartSelector } from "../store/hooks";
import {
  addToCart,
  CartItem,
  removeFromCart,
} from "../store/slices/cart_slice";

export default function CartItems() {
  const dispatch = useCartDispatch();
  const cartItems = useCartSelector((state) => state.cart.items);
  console.log(cartItems);

  const formattedTotalPrice =
    cartItems &&
    cartItems.reduce((val, item) => val + item.price * item.quantity, 0);
  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }
  function handleAddToCart(item: CartItem) {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
      })
    );
  }

  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      {formattedTotalPrice > 0 ? (
        <p id="cart-total-price">
          Cart Total: <strong>$ {formattedTotalPrice}</strong>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
