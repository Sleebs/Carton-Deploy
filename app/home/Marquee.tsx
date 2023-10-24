"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";
import arrow from "/public/images/arrow.svg";
import brands from "./brands";

const montserrat = Montserrat({
  subsets: ["latin"],
});
type Props = {};

const Marquee = (props: Props) => {
  const firstP = useRef(null);
  const secondP = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const speed = 0.01;

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstP.current, { xPercent: xPercent });
    gsap.set(secondP.current, { xPercent: xPercent });
    xPercent += speed * direction;
    requestAnimationFrame(animation);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  return (
    <>
      <div className='absolute w-full  '>
        <p className='absolute -top-10 right-8 sm:right-20 text-2xl font-medium flex'>
          <Image
            alt='arrow'
            src={arrow}
            width={24}
            style={{ rotate: "-180deg" }}
          />
          Collabs
        </p>
        <div className='absolute w-full overflow-hidden'>
          <div className='relative  whitespace-nowrap flex ' ref={slider}>
            <p
              className={`m-0  sm:text-8xl text-5xl font-medium  ${montserrat.className}`}
              ref={firstP}
            >
              {brands.map((brand) => `${brand} - `)}
            </p>
            <p
              className={`m-0  sm:text-8xl text-5xl font-medium  ${montserrat.className}`}
              ref={secondP}
            >
              {brands.map((brand) => `${brand} - `)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
