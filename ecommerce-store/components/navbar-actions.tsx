"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";

import { ShoppingBag } from "lucide-react";

type Props = {};

const NavbarActions = (props: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
