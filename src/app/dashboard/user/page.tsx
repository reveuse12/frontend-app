import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
const page = () => {
  return <div className="flex-1 space-y-4  p-4 md:p-8 pt-6"></div>;
};

export default page;
