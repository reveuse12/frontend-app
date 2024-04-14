"use client";
import React from "react";
import BreadCrumb from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePickerWithRange } from "@/components/ui/date-picker/date-picker";

const breadcrumbItems = [{ title: "Leaves", link: "/dashboard/leaves" }];

const Page = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <DatePickerWithRange />
      </div>
    </ScrollArea>
  );
};

export default Page;
