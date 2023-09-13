import React from "react";
import BillboardClient from "./components/client";
import prismadb from "@/lib/prismadb";
import { Billboard } from "@prisma/client";
import { BillboardColumn } from "./components/columns";
import { format } from "date-fns";

type Props = {
  params: {
    storeId: string;
  };
};

const Billboards = async ({ params }: Props) => {
  let billboards: Billboard[] = [];
  try {
    billboards = await prismadb.billboard.findMany({
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

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default Billboards;
