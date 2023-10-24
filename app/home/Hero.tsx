"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import img from "/public/images/imgcut2.png";
import useWindow from "@/hooks/useWindow";
import "./hero.css";

type Props = {};
const bGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
//Variants
const container = {
  show: { transition: { staggerChildren: 0.5 } },
};
const item = {
  hidden: {
    // initial
    opacity: 0,
    y: 100,
  },
  show: {
    // animate
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      duration: 0.7,
    },
  },
};

const Hero = (props: Props) => {
  return (
    <section
      className=' w-full overflow-hidden relative items-center justify-center'
      style={{ height: "96vh" }}
    >
      <Image
        src={img}
        width={1300}
        height={732}
        placeholder='blur'
        style={{ objectFit: "contain", height: "732px" }}
        alt=''
        // layout='fill'
        // objectFit='contain'
        className=' absolute h-full  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={`${bGrotesque.className} sm:text-9xl text-5xl font-medium flex flex-col items-center pointer-events-none relative top-1/2 -translate-y-1/2`}
      >
        Carton
      </motion.p>
    </section>
  );
};

export default Hero;
