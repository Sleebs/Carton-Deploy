"use client";
import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import "./burgerMenu.css";
import Image from "next/image";
import instagram from "/public/images/socialmedia/instagram-light.svg";
import facebook from "/public/images/socialmedia/facebook-light.svg";
import mail from "/public/images/socialmedia/mail.svg";

type Props = {};

const BurgerMenu = forwardRef(function Index(props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  //   const innerRef = useRef<HTMLInputElement>(null);
  //   useImperativeHandle(outerRef, () => innerRef.current!, []);
  return (
    <div className='cursor-pointer fixed flex flex-col  gap-2 top-5 right-5 z-10 w-11 h-11 mix-blend-difference burger-menu burger-container'>
      <div
        className='bounds rounded-full '
        ref={ref}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      ></div>
      {isOpen && (
        <ul className='mix-blend-normal text-white flex flex-col gap-8 w-full h-full py-14 '>
          <li>
            <Image src={instagram} width={48} alt='instagram'></Image>
          </li>
          <li>
            <Image src={mail} width={48} alt='instagram'></Image>
          </li>
          <li>
            <Image src={facebook} width={48} alt='instagram'></Image>
          </li>
        </ul>
      )}
    </div>
  );
});

export default BurgerMenu;
