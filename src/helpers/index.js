let cart = new Set();

export function addToCart(id) {
  cart.add(id);
  console.log(
    "I'am adding this product to cart. Your cart length - ",
    cart.size,
  );
}

export function removeFromCart(id) {
  cart.delete(id);
  console.log(
    "I'am removing this product from cart. Your cart length - ",
    cart.size,
  );
}
