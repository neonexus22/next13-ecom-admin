import prismadb from "@/lib/prismadb";
import React from "react";
import SizeForm from "./components/size-form";
import { Size } from "@prisma/client";

type Props = {
  params: {
    sizeId: string;
  };
};

const SizePage = async ({ params }: Props) => {
  let size: Size | null = null;
  try {
    size = await prismadb.size.findUnique({
      where: {
        id: params.sizeId,
      },
    });
  } catch (error) {
    console.log("No size found");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
