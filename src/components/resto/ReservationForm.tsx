"use client";

import { FormEvent } from "react";

import { Button } from "../ui/button";

export default function ReservationForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
  };
  
  return (
    <div id="resto-reservationform" className="max-w-screen mx-4 py-6 px-4 bg-white shadow-xl -mt-24 space-y-4 md:-mt-28 md:space-y-6 md:w-fit md:mx-auto md:p-8">
      <h2 className="text-center text-lg md:text-2xl leading-tight md:leading-normal text-accent">
        Ingin makan di tempat? <br className="md:hidden" /><strong>Reservasi tempat sekarang!</strong>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-accent" htmlFor="reservationDate">Nama Lengkap</label>
            <input
              placeholder="John Doe"
              className="border-b text-primary text-sm md:text-base focus:border-accent focus:outline-none"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-accent" htmlFor="phone">Nomor Telepon</label>
            <input
              placeholder="+628xxxxxxxx"
              pattern="^\+62\d{8,12}$"
              className="border-b text-primary text-sm md:text-base focus:border-accent focus:outline-none"
              type="tel"
              name="phone"
              id="phone"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-accent" htmlFor="date">Tanggal Reservasi</label>
            <input
              className="border-b text-primary text-sm md:text-base focus:border-accent focus:outline-none"
              type="date"
              name="date"
              id="reservationDate"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-accent" htmlFor="time">Jam Reservasi</label>
            <input
              className="border-b text-primary text-sm md:text-base focus:border-accent focus:outline-none"
              type="time"
              required
              name="time"
              id="time"
            />
          </div>
        </div>
        <Button type="submit" className="block mx-auto">Reservasi</Button>
      </form>
    </div>
  );
};