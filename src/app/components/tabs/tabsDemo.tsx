/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Tabs } from "./tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>Product Dashboard</h2>
          <p>
            Explore our latest products, view sales data, and manage inventory
            directly from this dashboard.
          </p>
          {/* Replace DummyContent with actual content related to products */}
          <div>
            <h3>Latest Products</h3>
            <p>View our newest products and their performance metrics.</p>
            {/* Additional content related to products */}
          </div>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>Services Dashboard</h2>
          <p>
            Monitor and manage our services, track customer feedback, and ensure
            high-quality service delivery.
          </p>
          {/* Replace DummyContent with actual content related to services */}
          <div>
            <h3>Service Performance</h3>
            <p>
              Analyze the performance of our services based on customer feedback
              and internal metrics.
            </p>
            {/* Additional content related to services */}
          </div>
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>Playground Dashboard</h2>
          <p>
            Experiment with new features, test ideas, and innovate without
            impacting the main dashboard.
          </p>
          {/* Replace DummyContent with actual content related to the playground */}
          <div>
            <h3>Feature Testing</h3>
            <p>
              Test new features and get feedback from users in a controlled
              environment.
            </p>
            {/* Additional content related to the playground */}
          </div>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>Content Dashboard</h2>
          <p>
            Manage all your content, from blog posts to marketing materials, and
            track their performance.
          </p>
          {/* Replace DummyContent with actual content related to content */}
          <div>
            <h3>Content Library</h3>
            <p>
              Access a comprehensive library of all your content, organized by
              type and status.
            </p>
            {/* Additional content related to content */}
          </div>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>Random Dashboard</h2>
          <p>
            Explore random data, insights, and features that don't fit into the
            other categories.
          </p>
          {/* Replace DummyContent with actual content related to random */}
          <div>
            <h3>Random Insights</h3>
            <p>
              Discover interesting insights and data points that might not be
              immediately obvious.
            </p>
            {/* Additional content related to random */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <h2 className="mb-4 text-3xl">Features</h2>
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
