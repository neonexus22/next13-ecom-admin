import prismadb from "@/lib/prismadb";
import React from "react";
import { CategoryForm } from "./components/category-form";
import { Category, Billboard } from "@prisma/client";

type Props = {
  params: {
    categoryId: string;
    storeId: string;
  };
};

const CategoryPage = async ({ params }: Props) => {
  let category: Category | null = null;

  console.log("params", params.categoryId, params.storeId);

  try {
    category = await prismadb.category.findFirst({
      where: {
        id: params.categoryId,
      },
    });
  } catch (error) {
    console.log({ error });
  }
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  console.log({ billboards });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
};

export default CategoryPage;
