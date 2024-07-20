import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { title } from "process";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributors } from "./components/SalesDistributor";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";

export const dataCardsSummary = [
  {
    icon: UsersRound,
    total: "12.450",
    average: 15,
    title: "Compañias Creadas",
    tooltipText: "Mira todas las compañias creada",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Ingresos Totales",
    tooltipText: "Ver todo el Resumen",
  },
  {
    icon: BookOpenCheck,
    total: "363,95$",
    average: 30,
    title: "Tasa de rebote",
    tooltipText: "Ver todo el Resume",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(
          ({ icon, total, average, title, tooltipText }) => (
            <CardSummary
              key={title}
              icon={icon}
              total={total}
              average={average}
              title={title}
              tooltipText={tooltipText}
            />
          )
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <SalesDistributors />
      </div>

        <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
          <TotalSuscribers />
          <ListIntegrations />
        </div>

    </div>
  );
}
