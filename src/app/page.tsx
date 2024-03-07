"use client"

import { LampDemo } from "./components/lamp/lamp";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <LampDemo/>
    </main>
  );
}
