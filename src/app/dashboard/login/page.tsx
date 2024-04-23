"use client";
import { Button } from "@/components/ui/button";
import { postApi } from "@/lib/api";
import { useState } from "react";
import toast from "react-hot-toast";
const Page = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const login = async () => {
    // postApi("login", {
    //   username: "XXXXX",
    //   password: "XXXXX",
    // });
    toast.success("Login success");
  };
  return (
    <div>
      <h1>this is login page</h1>
      <Button onClick={login}>Hello</Button>
    </div>
  );
};

export default Page;
