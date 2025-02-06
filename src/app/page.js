import React from "react";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { Menu } from "./_components/menu";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}
