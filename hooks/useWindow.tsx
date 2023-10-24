"use client";
import React, { useState, useEffect } from "react";

type Props = {};

export default function useWindow<width, height>(win: Window) {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: win.innerWidth,
    height: win.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: win.innerWidth,
        height: win.innerHeight,
      });
    };
    handleResize();
    win.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      win.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenSize;
}
