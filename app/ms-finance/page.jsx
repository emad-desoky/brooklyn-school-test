import MsTable from "@/components/ms-table/MsTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const page = async () => {
  const degreeRankings = await prisma.degreeRanking.findMany({
    where: { degree: "Finance" },
  });
  return (
    <div>
      <MsTable degreeRankings={degreeRankings} />
    </div>
  );
};

export default page;
