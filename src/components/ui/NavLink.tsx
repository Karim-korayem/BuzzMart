"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition ${
        isActive
          ? "text-orange-500 font-bold"
          : " hover:text-orange-200"
      }`}
    >
      {children}
    </Link>
  );
}
