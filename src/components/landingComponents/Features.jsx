import React from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { BookmarkCheck } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { features } from "@/lib/constants";

const Features = () => {
  return (
    // <section className="py-20 px-10" id="features">
    //   <div className="text-center">
    //     <h1 className="text-5xl font-bold">Features</h1>
    //     <p className="text-lg mt-2">Features that wander wise provides</p>

    // <section className="py-24 px-10 bg-gray-50" id="features">

    <section className="py-24 px-10" id="features">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Wander Wise?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to plan, book, and enjoy your perfect
            trip
          </p>
        </div>

        {/* feature cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            return (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon
                    className={`h-12 w-12 mx-auto mb-4 ${feature.color} `}
                  />
                  <CardTitle className={` text-xl `}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
