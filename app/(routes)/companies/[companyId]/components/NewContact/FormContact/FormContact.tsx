"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Toast } from "@/components/ui/toast";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { FormContactProps } from "./FormContact.types";
import { formSchema } from "./FormContact.form";
import { toast } from "@/components/ui/use-toast";

export function FormContact(props: FormContactProps) {
  const { setOpen } = props;

  const params = useParams<{ companyId: string }>()
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        axios.post(`/api/company/${params.companyId}/contact`, values)
        toast({title: "Contact Created!" })
        router.refresh()
        setOpen(false)
    } catch (error) {
        toast({
            title: "There was an error",
            variant: "destructive" 
        })
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:grid-cols-2 grid gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Juan Cortez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="+34 777 66 66 33" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona el rol"/>
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="Comercial">Comercial</SelectItem>
                    <SelectItem value="CEO">CEO</SelectItem>
                    <SelectItem value="Quality">Servicios</SelectItem>
                    <SelectItem value="Analitics">Analítica</SelectItem>
                    <SelectItem value="Other">Otro ...</SelectItem>
                </SelectContent>
                <FormMessage />
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit">Save contact</Button>
      </form>
    </Form>
  );
}
