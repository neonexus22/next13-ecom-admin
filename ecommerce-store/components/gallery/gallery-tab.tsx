import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";

import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type GallaryTabProps = {
  image: ImageType;
};

const GallaryTab: FC<GallaryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              alt="image"
              fill
              src={image.url}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GallaryTab;
