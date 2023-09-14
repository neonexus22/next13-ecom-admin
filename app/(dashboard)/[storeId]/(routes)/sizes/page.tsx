import React from "react";
import SizeClient from "./components/client";
import prismadb from "@/lib/prismadb";
import { Size } from "@prisma/client";
import { SizeColumn } from "./components/columns";
import { format } from "date-fns";

type Props = {
  params: {
    storeId: string;
  };
};

const SizesPage = async ({ params }: Props) => {
  let sizes: Size[] = [];
  try {
    sizes = await prismadb.size.findMany({
      where: {
        storeId: params.storeId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log({ error });
  }

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
