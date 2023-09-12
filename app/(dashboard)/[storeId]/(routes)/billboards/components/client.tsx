"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

type Props = {};

const BillboardClient = (props: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading
          title="Billboards (0)"
          description="Manage billboards for your state"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillboardClient;
