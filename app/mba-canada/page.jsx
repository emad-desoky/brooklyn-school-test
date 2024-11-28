import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const CanadaMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "Canada" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default CanadaMBA;
