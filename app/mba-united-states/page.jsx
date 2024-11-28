import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const USMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "United States" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default USMBA;
