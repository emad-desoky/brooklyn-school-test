import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const MiddleEastMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "Middle East & Africa" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default MiddleEastMBA;
