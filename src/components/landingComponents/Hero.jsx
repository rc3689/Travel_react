import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-white">
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <img
          src="/urbanworld.jpg"
          alt="background"
          className="w-full h-full "
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-10 min-h-[90vh] max-w-2/3 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Explore the world with Wander Wise
        </h1>

        <p className="px-20 text-lg text-white">
          {" "}
          <span>"Exploring the world, gently and wisely,</span>
          <span>Travel with wonder, live with wisdom,</span>
          <span>Wander freely, choose wisely.”</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="/trips">
            <Button size={"lg"}>Explore Trips</Button>
          </a>
          <a href="/signup">
            <Button size="lg" variant={"outline"} className="bg-transparent">
              Register
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
