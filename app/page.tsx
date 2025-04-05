import Image from "next/image";
import Link from "next/link";
import layout from "./layout";
import Hero from "./components/hero";
import About from "./components/About";
import Competences from "./components/Competences";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
   <Hero/>
   <About/>
    <Competences/>
    <Projects/>
    </>
   
       );
}
