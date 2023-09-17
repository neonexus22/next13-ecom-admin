"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";

import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

type Props = {};

const NavbarActions = (props: Props) => {
  const router = useRouter();
  const cart = useCart();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
