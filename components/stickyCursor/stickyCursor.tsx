"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = { stickyElement?: React.MutableRefObject<null> };

const Cursor = (props: Props, stickyElement?: HTMLDivElement) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = window.innerWidth > 720 ? (isHovered ? 60 : 20) : 0;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = stickyElement
      ? stickyElement?.getBoundingClientRect()
      : { left: 0, top: 0, width: 0, height: 0 };
    const center = { x: left + width / 2, y: top + height / 2 };
    const distanceFrom = { x: clientX - center.x, y: clientY - center.y };
    if (isHovered) {
      mouse.x.set(center.x - cursorSize / 2 + distanceFrom.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distanceFrom.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement?.addEventListener("mouseover", manageMouseOver);
    stickyElement?.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyElement?.removeEventListener("mouseover", manageMouseOver);
      stickyElement?.removeEventListener("mouseleave", manageMouseLeave);
    };
  });
  return (
    <motion.div
      className='rounded-full fixed  bg-black z-10 pointer-events-none '
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    />
  );
};

export default Cursor;
