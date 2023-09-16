"use client";

import { FC } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type CurrencyProps = {
  value: string | undefined;
};

const Currency: FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
