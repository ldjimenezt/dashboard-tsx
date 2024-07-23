"use Client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import { ModalAddEventProps } from "./ModalAddEvent.types";
import { FormEvent } from "../../FormEvent";


export  function ModalAddEvent(props: ModalAddEventProps) {
    const { open, companies, setNewEvent, setOnSaveNewEvent, setOpen } = props

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Agrega un nuevo Evento</DialogTitle>
            </DialogHeader>
                <FormEvent setOnSaveNewEvent={setOnSaveNewEvent} companies={companies} setNewEvent={setNewEvent} setOpen={setOpen}/>
        </DialogContent>
    </Dialog>
  )
}
