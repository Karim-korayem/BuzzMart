import { createContext, useContext, useEffect, useState } from "react";
import { WishlistItem } from "../types/wishlistItem";
import { getUserWishlist } from "../actions/wishlist.action";

interface WishlistContextType {
  wishlistDetails: WishlistItem[] | null;
  getWishlistDetails: () => Promise<void>;
  setWishlistDetails: (wishlist: WishlistItem[] | null) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlistDetails: null,
  getWishlistDetails: async () => {},
  setWishlistDetails: () => {},
});
export default function WishlistContextProvdier({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlistDetails, setWishlistDetails] = useState<WishlistItem[] | null>(null);;

  async function getWishlistDetails() {
    const response = await getUserWishlist();
     console.log("Context getWishlistDetails response:", response);
    setWishlistDetails(response?.data?.data);
  }
  useEffect(() => {
    getWishlistDetails();
  }, []);


  return (
    <WishlistContext.Provider
      value={{ wishlistDetails, getWishlistDetails, setWishlistDetails }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
export function useWishlist() {
  const myContext = useContext(WishlistContext);
  return myContext;
}
