import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { Contact, Mail, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { ListContactsProps } from "./List contacts.types";
import { auth } from "@clerk/nextjs";

export async function ListContacts(prorps: ListContactsProps) {
  const { company } = prorps;
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const contacts = await db.contact.findMany({
    where: {
      company: {
        id: company.id,
      },
    },
  });

  if (contacts.length === 0) {
    return <p>Actualmente no dispones de ningún contacto</p>;
  }

  return (
    <div>
      <div className="mt-4 mb-2 grid grid-cols-3 p-2 gap-x-3 items-center justify-between px-4 bg-slate-400/20 rounded-lg">
        <p>Name</p>
        <p>Rol</p>
        <p className="text-right">Contacto</p>
      </div>

      {contacts.map((Contact) => (
        <div key={Contact.id}>
          <div className="grid grid-cols-3 gap-x-3 items-center justify-between px-4">
            <p>{Contact.name}</p>
            <p>{Contact.role}</p>
            <div className="flex items-center justify-end gap-x-6">
              <a href={`telto: ${Contact.phone}`} target="_blank">
                <Phone className="w-4 h-4" />{" "}
              </a>
              <a href={`mailto: ${Contact.email}`} target="_blank">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <Separator className="my-3" />
        </div>
      ))}
    </div>
  );
}
