import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const LatinAmericaMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "Latin America" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default LatinAmericaMBA;
