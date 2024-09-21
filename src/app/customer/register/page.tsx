"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import bgLogin from "@/assets/gurame-bakar.png";
import logoDsw from "@/assets/logo-dsw.png";
import { isValidDate, maxValidYear } from "@/helper/validator";
import { authService } from "@/services/auth.service";
import "../halfside.css";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().regex(/^\+62\d{8,12}$/),
  gender: z.enum(['FEMALE', 'MALE']),
  day: z.string().regex(/^\d{1,2}$/),
  month: z.string().regex(/^(0[1-9]|1[0-2]|[1-9])$/),
  year: z.string().regex(/^\d{4}$/)
})
  .refine(data => isValidDate(data.day, data.month, data.year), { path: ["day"] })
  .refine(data => maxValidYear(data.year), { path: ["year"] });

export default function Register() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      day: "",
      month: "",
      year: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { day, month, year } = values;
    const formattedDate = new Date(`${year}-${month.padStart(2, '0')}-${day}`);

    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      phone: values.phone,
      gender: values.gender,
      birthdate: formattedDate
    };

    try {
      setLoading(true);

      const res = await authService.register(payload);
      if (!res.data.success) throw new Error("Failed to register new user");

      router.push("/customer/login");
    } catch (error: any) {

      console.error(error.response.data.message);
    } finally {
      setLoading(false);
    };
  };

  return (
    <Wrapper id="register" className="h-screen w-screen overflow-hidden flex">
      {/* Register Form */}
      <Form {...form}>
        <div className="bg-custom flex-1 flex items-center justify-center">
          <form
            className="no-scrollbar min-w-60 max-w-[480px] min-h-96 h-[640px] overflow-y-scroll p-6 lg:p-10 mx-4 bg-white shadow-xl rounded-lg space-y-6 lg:space-y-8 border"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Image
              src={logoDsw}
              alt="Dapoer Sariwangi"
              className="h-12 lg:h-14 w-fit mx-auto"
            />
            <div className="login-heading space-y-1 md:space-y-2 text-center">
              <h2 className="text-xl md:text-2xl font-bold">Create your account</h2>
              <em className="inline-block text-xs md:text-sm opacity-50">We won&apos;t expose or share any of your information without your approval.</em>
            </div>
            <hr />
            <div className="space-y-4">
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="John" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Doe" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="someone@example.com" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="********" />
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
                      <Input {...field} type="tel" placeholder="+62895xxxxxxxx" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        className="flex"
                      >
                        <FormItem className="flex-1 flex items-center space-x-2.5 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="FEMALE" />
                          </FormControl>
                          <FormLabel>Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex-1 flex items-center space-x-2.5 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="MALE" />
                          </FormControl>
                          <FormLabel>Male</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="day"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Day</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="DD" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="month"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Month</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="MM" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="YYYY" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">{loading ? 'Loading...' : 'Register'}</Button>
            <p className="text-sm text-center">Already have an account? <Link href='/customer/login' className="font-semibold text-primary hover:underline">Log in here</Link>.</p>
          </form>
        </div>
      </Form>

      {/* Wallpaper Side */}
      <div className="flex-1 bg-cover bg-center hidden lg:block" style={{ backgroundImage: `url(${bgLogin.src})` }}></div>
    </Wrapper>
  );
};