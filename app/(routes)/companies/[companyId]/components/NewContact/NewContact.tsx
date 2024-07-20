"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FormContact } from "./FormContact"

export function NewContact() {
    const [open, SetOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={SetOpen}> 
        <DialogTrigger asChild>
            <Button>Nuevo Contacto</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
                <DialogTitle>Agregar Contacto</DialogTitle>
                <DialogDescription>
                    Create tu contacto para modificarlo
                </DialogDescription>
            </DialogHeader>
            <FormContact setOpen={SetOpen}/>
        </DialogContent>
    </Dialog>
  )
}
