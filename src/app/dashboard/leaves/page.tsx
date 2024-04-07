"use client";
import React from "react";
import BreadCrumb from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Leaves", link: "/dashboard/leaves" }];

const page = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
      </div>
    </ScrollArea>
  );
};

export default page;
