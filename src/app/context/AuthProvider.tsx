"use client";
import { SessionProvider } from "next-auth/react";
import CartContextProvdier from "./CartContext";
import { Toaster } from "react-hot-toast";
import WishlistContextProvdier from "./WishlistContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <WishlistContextProvdier> <CartContextProvdier>{children}</CartContextProvdier></WishlistContextProvdier>
     
      <Toaster position="top-center" reverseOrder={false} />
    </SessionProvider>
  );
}
