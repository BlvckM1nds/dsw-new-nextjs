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
import { useToast } from "@/hooks/use-toast";

import bgLogin from "@/assets/gurame-bakar.png";
import logoDsw from "@/assets/logo-dsw.png";
import { authService } from "@/services/auth.service";
import "../halfside.css";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const res = await authService.login(values);
      if (!res.data.success) throw new Error("Login failed");

      toast({
        description: res.data.message
      });
      
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <Wrapper id="login" className="h-screen w-screen overflow-hidden flex">
      {/* Login Form */}
      <Form {...form}>
        <div className="bg-custom flex-1 flex items-center justify-center">
          <form onSubmit={form.handleSubmit(onSubmit)} className="no-scrollbar min-w-60 max-w-[480px] min-h-96 max-h-[640px] overflow-y-scroll p-6 lg:p-10 mx-4 bg-white shadow-xl rounded-lg space-y-6 lg:space-y-8 border">
            <Image
              src={logoDsw}
              alt="Dapoer Sariwangi"
              className="h-12 lg:h-14 w-fit mx-auto"
            />
            <div className="login-heading space-y-1 md:space-y-2 text-center">
              <h2 className="text-xl md:text-2xl font-bold">Login to your account</h2>
              <em className="inline-block text-xs md:text-sm opacity-50">We won&apos;t expose or share any of your information without your approval.</em>
            </div>
            <hr />
            <div className="space-y-4">
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
            </div>
            <Button
              className="w-full"
              type="submit"
            >
              {loading ? 'Loading...' : 'Login'}
            </Button>
            <p className="text-sm text-center">Not a member? <Link href="/customer/register" className="font-semibold text-primary hover:underline">Sign up here</Link>.</p>
          </form>
        </div>
      </Form>

      {/* Wallpaper Side */}
      <div className="flex-1 bg-cover bg-center hidden lg:block" style={{ backgroundImage: `url(${bgLogin.src})` }}></div>
    </Wrapper>
  );
};