"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export function HeroSection() {
  const handleStartReading = useCallback(() => {
    const featuredPostsSection = document.getElementById("featured-posts");
    if (featuredPostsSection) {
      featuredPostsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="relative h-[500px] mb-12 overflow-hidden rounded-lg ">
      <Image
        src="/hero-img.webp"
        alt="Header image"
        width={1300}
        height={500}
        className="object-cover mx-auto px-auto"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          style={{ fontFamily: "Roboto" }}
        >
          Welcome to my <span className="text-yellow-500 text-7xl">Travel</span>{" "}
          Blog !!
        </h1>
        <p
          className="text-xl md:text-2xl mb-6 text-white max-w-2xl"
          style={{ fontFamily: "Roboto" }}
        >
          Your gateway to wanderlust inspiration, travel tips, and hidden gems
          from around the globe. Pack your bags and lets explore the world
          together!
        </p>
        <Button
          className="hover:text-yellow-700 hover:scale-110 hover:shadow-lg transition-all"
          variant="secondary"
          size="lg"
          onClick={handleStartReading}
        >
          Start Reading
        </Button>
      </div>
    </section>
  );
}
