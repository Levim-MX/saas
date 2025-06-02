import EverythingYouNeed from "@/sections/EverythingYouNeed";
import Footer from "@/sections/Footer";
import { Headers } from "@/sections/Headers";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Plan from "@/sections/Plan";
import Product from "@/sections/Product";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Headers />
      <Hero />
      <LogoTicker />
      <Product />
      <EverythingYouNeed />
      <Plan />
      <Footer />
    </>
  );
}
