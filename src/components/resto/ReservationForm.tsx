"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const formSchema = z.object({
  fullName: z.string(),
  phone: z.string().regex(/^\+62\d{8,12}$/),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  room: z.string(),
  guests: z.coerce.number().min(1)
});

export default function ReservationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      date: "",
      time: "",
      room: "",
      guests: 1
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  };

  return (
    <div
      id="resto-reservationform"
      className="max-w-screen mx-4 py-6 px-4 bg-white shadow-xl -mt-24 space-y-4 md:-mt-28 md:space-y-6 md:w-fit md:mx-auto md:p-8"
    >
      <h2 className="text-center text-lg md:text-2xl leading-tight md:leading-normal text-accent">
        Ingin makan di tempat? <br className="md:hidden" />
        <strong>Reservasi tempat sekarang!</strong>
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input required {...field} type="text" placeholder="Your Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input required {...field} type="tel" placeholder="+62895xxxxxxxx" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input required {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Input required {...field} type="time" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="room"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="vip">VIP</SelectItem>
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="smoking">Smoking Area</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guests</FormLabel>
                  <FormControl>
                    <Input required {...field} min="1" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="block mx-auto">
            Reservasi
          </Button>
        </form>
      </Form>
    </div>
  );
};