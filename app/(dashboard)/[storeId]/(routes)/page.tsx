import prismadb from "@/lib/prismadb";
import React, { FC } from "react";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>{JSON.stringify(store)}</div>;
};

export default DashboardPage;
