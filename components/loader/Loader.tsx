import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "/public/images/imgcut2.png";
import herov0 from "/public/images/hero-vertical0.jpeg";
import herov1 from "/public/images/hero-vertical1.jpeg";
import herov2 from "/public/images/hero-vertical2.jpeg";
import herov3 from "/public/images/hero-vertical3.jpeg";

type Props = {};

const Loader = (props: Props) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const imgStyle = {
    "": "none",
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "linear", duration: 1 },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: { ease: "easeInOut", duration: 0.8 },
    },
  };
  return (
    <>
      <div className='h-10 w-full'></div>
      <section
        className=' w-full overflow-hidden  flex items-center justify-center'
        style={{ height: "96vh" }}
      >
        <motion.div
          className='text-9xl pointer-events-none'
          style={{ width: "1300px", height: "732px" }}
          initial={{ opacity: 0, y: 200, x: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1.1,
            transition: { duration: 0.7 },
          }}
          exit={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
          }}
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
            className='pointer-events-none'
          />
        </motion.div>
        <motion.section
          className='absolute  flex flex-wrap w-full sm:w-4/6 h-4/6 pointer-events-none'
          style={{}}
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <motion.div className='w-1/2 h-1/2 flex items-start ' variants={item}>
            <div className=' w-28 sm:w-auto'>
              <Image src={herov0} alt='alt' width={200} height={300} />
            </div>
          </motion.div>
          <motion.div
            className='w-1/2 h-1/2 flex items-start justify-center pointer-events-none'
            variants={item}
          >
            <div className='w-28 sm:w-auto'>
              <Image src={herov1} alt='alt' width={200} height={300} />
            </div>
          </motion.div>
          <motion.div
            className='w-1/2 h-1/2 flex items-end justify-center pointer-events-none'
            variants={item}
          >
            <div className='w-28 sm:w-auto '>
              <Image src={herov2} alt='alt' width={200} height={400} />
            </div>
          </motion.div>
          <motion.div
            className='w-1/2 h-1/2 flex items-end justify-end pointer-events-none'
            variants={item}
          >
            <div className='w-28 sm:w-auto '>
              <Image src={herov3} alt='alt' width={200} height={300} />
            </div>
          </motion.div>
        </motion.section>
      </section>
    </>
  );
};

export default Loader;
