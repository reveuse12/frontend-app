"use client";
import { Button } from "@/components/ui/button";
import { postApi } from "@/lib/api";
import { useState } from "react";
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
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Confirm password must be at least 8 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

const Page = () => {
  const form = useForm();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const login = async (_data: FieldValues) => {
    const response = await postApi("api/auth/login", {
      username: "holl",
      password: "pasword",
    });
    // setUser: (user) => set({ user })
    toast.success(response.message);
  };
  return (
    <div>
      <h1 className="text-2xl mt-6 text-center">Login</h1>
      <div className="flex justify-center items-center h-full">
        <div className="max-w-md w-full mt-6 p-6 bg-gray-300 rounded-xl shadow-lg">
          <Form {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      className="border-black"
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
                      className="border-black"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center mt-6">
              <Button type="submit" onClick={form.handleSubmit(login)}>
                Submit
              </Button>
            </div>
            <div className="text-center mt-4">
              <p>
                Dont have account?
                <Link href="/sign" className=" hover:underline">
                  SignUp
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
