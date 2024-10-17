import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpValidaitionSchema } from "@/lib/validation";

const SignUpPage = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(signUpValidaitionSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex h-full w-full flex-col gap-7">
      <Navbar />

      <div className=" flex flex-col items-center justify-center w-full h-[calc(100vh-120px)] space-y-4">
        <h1 className="text-[25px]  font-semibold ">Sign Up</h1>
        <p className="text-gray-500 mb-4">
          You can register with us, Fill bellow form
        </p>
        <div className="flex items-center justify-between gap-5 pb-10">
          <div className="hidden md:flex">
            <img
              src="sign.svg"
              alt=""
              className="flex-1 object-contain h-[250px]"
            />
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 flex-1 "
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="User Name" {...field} />
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
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
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
                      <Input
                        type="password"
                        placeholder="User Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Sign Up</Button>
            </form>
          </Form>
        </div>
        Have you an Account Please sign In..
      </div>

      <Footer />
    </div>
  );
};

export default SignUpPage;
