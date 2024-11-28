import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const OceaniaMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "Oceania" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default OceaniaMBA;
