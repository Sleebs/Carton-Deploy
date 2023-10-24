import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "/public/images/socialmedia/instagram.svg";
import facebook from "/public/images/socialmedia/facebook.svg";
import mail from "/public/images/socialmedia/mail.svg";
// import logo from "/public/images/logo_carton_no_text.svg";
import logo from "/public/images/logo_nero.svg";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className='flex h-10 items-center px-5'>
      <div className='flex-1 '>
        {/* <a className='btn btn-ghost normal-case text-xl'>Carton Sports</a> */}
        <div className='flex gap-5 items-center'>
          <Image src={logo} alt='logo' width={48} />
          {3 > 2 && <p>Carton Sport Polare</p>}
        </div>
      </div>
      <div className='flex gap-5 z-20'>
        <Link href={"./"}>
          <Image src={instagram} alt='instagram' width={24} />
        </Link>
        <Link href={"./"}>
          <Image src={facebook} alt='instagram' width={24} />
        </Link>
        <Link href={"./"}>
          <Image src={mail} alt='instagram' width={24} />
        </Link>

        <p>&#x2B;02 86453034</p>
      </div>
    </div>
  );
};

export default Nav;
