export const generateCartItem = (name, price, amount) => {
  return {
    name,
    price,
    amount,
    getSubtotal() {
      return this.price * this.amount;
    },
    getDetail() {
      return `${this.name}@${this.price}円 × ${this.amount}個 = ${this.getSubtotal()}円`;
    },
  };
};

export const getTotal = cartItemArray => {
  let total = 0;
  for (const cartItem of cartItemArray) {
    total += cartItem.getSubtotal();
  }
  return total;
};
