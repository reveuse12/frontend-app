/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Tabs } from "./tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "AI-Chat",
      value: "AI-Chat",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-slate-300 text-xl md:text-4xl font-bold bg-gradient-to-br from-purple-700 to-violet-900">
          <p>
            AI-Chat is an innovative platform where users can engage in
            conversations with an AI-driven chatbot. Whether it's asking
            thought-provoking questions or seeking answers, AI-Chat provides a
            seamless experience.
          </p>
          <div>
            <h3>Latest Advancement</h3>
            <p>
              Experience our latest advancements in chat technology, boasting
              speeds twice as fast as Google GEMINI.
            </p>
            {/* Add actual content related to the latest advancements */}
            <div className="grid  mt-6 grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black p-4 rounded-xl shadow-md">
                <h4 className="text-lg font-bold mb-2">Improved AI Models</h4>
                <p>
                  Our AI models have been upgraded to offer more accurate
                  responses and better understand user queries.
                </p>
              </div>
              <div className="bg-black p-4 rounded-xl shadow-md">
                <h4 className="text-lg font-bold mb-2">
                  Enhanced User Interface
                </h4>
                <p>
                  Explore our sleek and intuitive interface, designed for
                  effortless interaction and navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Block-Staking",
      value: "Block-Staking",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-slate-300 bg-gradient-to-br from-purple-700 to-violet-900">
          <p>
            Block-Staking empowers users to analyze the performance of their
            blockchain staking investments and monitor returns conveniently from
            anywhere in the world.
          </p>
          <div>
            <h3>Service Performance</h3>
            <p>
              Monitor and manage our services, track customer feedback, and
              ensure high-quality service delivery.
            </p>
            <p>
              We provide the best in class of the interest rate to our customer
            </p>
            {/* Add actual content related to service performance */}
            <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-4">
              <div className="bg-black p-4 rounded-xl shadow-md">
                <h4 className="text-lg font-bold mb-2">Real-time Analytics</h4>
                <p>
                  Gain insights into your staking performance with our
                  comprehensive analytics dashboard, providing real-time data
                  visualization.
                </p>
              </div>
              <div className="bg-black p-4 rounded-xl shadow-md">
                <h4 className="text-lg font-bold mb-2">Secure Transactions</h4>
                <p>
                  Rest assured knowing that your transactions are secure and
                  transparent, thanks to our blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AD-exports",
      value: "AD-exports",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>AD Exports</h2>
          <p>
            Client wanted a conviental website for there business for an
            international market.
          </p>
          {/* Replace DummyContent with actual content related to the playground */}
          <div>
            <h3>A unique way to showcase there skills in CNC</h3>
            <p>Preciou cut & using a modern tech for developing</p>
            <DummyContent />
          </div>
        </div>
      ),
    },
    {
      title: "Admin-Dashboard",
      value: "Admin-Dashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>Admin Dashboard</h2>
          <p>Coming Soon...</p>
          {/* Replace DummyContent with actual content related to content */}
          <div>
            <h3>A dashboard to manage the employee</h3>
            <p>
              Access a comprehensive data of all your employeea, organized by
              different categories.
            </p>
            <DummyContent />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <h2 className="mb-4 text-3xl">Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/stairs.jpg"
      alt="dummy image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[60%]  md:h-[50%] absolute -bottom-10 inset-x-0 w-[50%] rounded-xl mx-auto"
    />
  );
};
