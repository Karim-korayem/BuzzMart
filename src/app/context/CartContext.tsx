import { createContext, useContext, useEffect, useState } from "react";
import { getUserCart } from "../actions/cart.action";
import { CartData } from "../types/cart.model";

interface CartContextType {
  cartDetails: CartData | null;
  getCartDetails: () => Promise<void>;
  setCartdetails: (cart: CartData | null) => void;
}

const CartContext = createContext<CartContextType>({
  cartDetails: null,
  getCartDetails: async () => {},
  setCartdetails: () => {},
});
export default function CartContextProvdier({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartDetails, setCartdetails] = useState(null);

  async function getCartDetails() {
    const response = await getUserCart();
    setCartdetails(response?.data);
  }
  useEffect(() => {
    getCartDetails();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartDetails, getCartDetails, setCartdetails }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const myContext = useContext(CartContext);
  return myContext;
}
