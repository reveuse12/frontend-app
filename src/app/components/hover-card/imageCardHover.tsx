"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { DirectionAwareHover } from "./hover-cover";

export function DirectionAwareHoverDemo() {
  const imageUrl = "/stairs.jpg";
  return (
    <div className="h-[40rem] relative  flex items-center gap-6 justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <h2 className="text-2xl font-bold mb-4 ">Codenvision</h2>
        <p className="text-xl mb-4">Feb-2024 to present</p>
        <ul className="list-disc list-inside">
          <li>Real-time Data Visualization</li>
          <li>Basic Customization Options</li>
          <li>Access to Core Features</li>
          <li>24/7 Support</li>
        </ul>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={imageUrl}>
        <h2 className="text-2xl font-bold mb-4">CodeElevator (Gheeson)</h2>
        <p className="text-xl mb-4">Feb-2023 to Jan-2024</p>
        <ul className="list-disc list-inside">
          <li>Advanced Data Visualization</li>
          <li>Full Customization</li>
          <li>Access to All Features</li>
          <li>24/7 Priority Support</li>
        </ul>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={imageUrl}>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <p className="text-xl mb-4">B.E Env</p>
        <ul className="list-disc list-inside">
          <li>Custom Dashboard Solutions</li>
          <li>Premium Support</li>
          <li>Dedicated Account Manager</li>
          <li>Unlimited Access</li>
        </ul>
      </DirectionAwareHover>
    </div>
  );
}
