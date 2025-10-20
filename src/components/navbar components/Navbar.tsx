"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import { signOut, useSession } from "next-auth/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { useCart } from "@/app/context/CartContext";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "../ui/NavLink";
import { useWishlist } from "@/app/context/WishlistContext";

export default function Navbar () {
  const session = useSession();
  const { cartDetails } = useCart();
  const { wishlistDetails } = useWishlist();

  return (
    <div>
      <NavigationMenu className=" text-md p-5 max-w-full flex justify-between items-center border-b shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <NavigationMenuList className=" tracking-tighter text-3xl font-semibold">
          <NavigationMenuItem>
            <Link
              className="font-bold text-4xl font-serif bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent"
              href="/"
            >
              BuzzMart
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="font-bold gap-3 hidden md:flex">
          <NavigationMenuItem>
            <NavLink href="/">Home</NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink href="/products">Products</NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink href="/categories">Categories</NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink href="/brands">Brands</NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="gap-2 hidden md:flex">
          <NavigationMenuItem>
            <NavLink href="/cart">
              <Button
                variant="outline"
                className="relative cursor-pointer me-2"
              >
                {cartDetails?.numOfCartItems === 0 ? null : (
                  <Badge
                    variant="default"
                    className="absolute top-[-13px] right-[-18px] rounded-full"
                  >
                    {cartDetails?.numOfCartItems}
                  </Badge>
                )}
                <ShoppingCart />
                Cart
              </Button>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href="/wishlist">
              <Button variant="outline" className="relative cursor-pointer">
                <Badge
                  variant="default"
                  className="absolute top-[-13px] right-[-18px]  rounded-full"
                >
                  <Badge
                    variant="default"
                    className="absolute top-[-13px] right-[-18px] rounded-full"
                  >
                    ({wishlistDetails?.length || 0})
                  </Badge>
                </Badge>
                <Heart />
                Wishlist
              </Button>
            </NavLink>
          </NavigationMenuItem>
          {session.data ? (
            <NavigationMenuItem>
              <Link
                className="hover:text-red-500 transition ease-in-out duration-300"
                href="/"
                onClick={() => signOut({ callbackUrl: "/Log-in" })}
              >
                Log out
              </Link>
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem>
                <Link href="/Log-in">Log in</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/Register">Register</Link>
              </NavigationMenuItem>
            </>
          )}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-amber-500">
                <Menu className="h-10 w-10 " />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-4 mt-6 text-lg font-medium">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/categories">Categories</NavLink>
                <NavLink href="/brands">Brands</NavLink>
                <NavLink href="/cart">
                  Cart ({cartDetails?.numOfCartItems || 0})
                </NavLink>
                <NavLink href="/wishlist">
                  Wishlist ({wishlistDetails?.length || 0})
                </NavLink>
                {session.data ? (
                  <button
                    onClick={() => signOut({ callbackUrl: "/Log-in" })}
                    className="text-red-500 text-left"
                  >
                    Log out
                  </button>
                ) : (
                  <>
                    <Link href="/Log-in">Log in</Link>
                    <Link href="/Register">Register</Link>
                  </>
                )}
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenu>
    </div>
  );
}
