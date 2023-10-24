"use client";
import Loader from "@/components/loader/Loader";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Hero from "./home/Hero";
import Marquee from "./home/Marquee";
import PersonalShopper from "./home/PersonalShopper";
import Cursor from "@/components/stickyCursor/stickyCursor";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const stickyElement = useRef(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(stickyElement.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 100,
        onLeave: () => {
          gsap.to(stickyElement.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(stickyElement.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key={"loader"}>
          <Loader />
        </motion.div>
      ) : (
        <>
          <Nav />
          <Hero />
          <Marquee />
          <PersonalShopper />
          <Cursor />
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}
