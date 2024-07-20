import { CustomIcon } from "@/components/CustomIcon";
import { Building } from "lucide-react";
import { CustomersTable } from "../CustomersTable";


export  function LastCustomers() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex items-center gap-x-2">
            <CustomIcon icon={Building} />
            <p className="text-xl">Clientes Recientes</p>
        </div>
        <div>
            <CustomersTable />
        </div>

    </div>
  )
}
