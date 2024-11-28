import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const EuropeMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "Europe" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default EuropeMBA;
