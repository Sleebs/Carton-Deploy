"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Roboto, Montserrat } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./textAnim";
import compas from "/public/images/bussyfresh_4.svg";
// import compas from "/public/images/bussy.svg";

type Props = {};

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const PersonalShopper = (props: Props) => {
  const container = useRef(null);
  const isInView = useInView(container);
  const presentation =
    " BUSSOLA. Il servizio mette a disposizione la competenza e la specializzazione del personale che, con attenzione, offre ai clienti un servizio personalizzato per soddisfare ogni loro esigenza. Una vera e propria guida che, passo dopo passo, ti accompagnerà nell’acquisto di attrezzatura e abbigliamento adatto alle richieste.";

  const shortText =
    " PERSONAL SHOPPER. Il servizio mette a disposizione la competenza e la specializzazione di una persona dedicata che, con attenzione e competenza, offre al cliente una vera e propria guida che lo accompagni   nell’acquisto di attrezzatura e abbigliamento adatti alle sue esigenze.";
  return (
    <section className='sm:h-screen w-full flex items-center justify-center pt-28 sm:pb-2'>
      <div className='w-full flex  flex-wrap sm:px-20' ref={container}>
        <p
          className={`m-0 w-full xl:w-3/6  px-5 text-xl lg:text-3xl ${roboto.className} font-serif overflow-hidden mb-5`}
        >
          <Image
            alt='bussola'
            src={compas}
            width={32}
            className='inline-flex'
          />
          {presentation.split(" ").map((word: string, index: number) => {
            return (
              <span key={index} className='overflow-hidden'>
                <motion.span
                  custom={index}
                  variants={slideUp}
                  initial='initial'
                  animate={isInView ? "open" : "closed"}
                  className={`mr-1 inline-flex `}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          className={`m-0  w-full xl:w-3/6 px-5 text-sm lg:text-xl ${montserrat.className}  font-sans mb-5 sm:mb-0`}
          variants={opacity}
          initial='initial'
          animate={isInView ? "open" : "closed"}
        >
          Carton Sport Polare, negozio storico della realtà milanese, da quasi
          un secolo si occupa di vendita di articoli sportivi, in particolare
          per alpinismo, sci, free climbing, trekking e campeggio. <br />
          <br />
          Competenza, professionalità, esperienza e affidabilità sono le parole
          chiave che caratterizzano il brand.
          <br />
          <br />
          Il personale, altamente qualificato, garantisce un’esperienza
          d’acquisto in grado di soddisfare ogni bisogno del cliente,
          estinguendo le sue perplessità con attenzione e serietà.
          <br />
          <br />
          Il servizio offerto permette al cliente di assicurarsi una guida, per
          cui è possibile esprimere una preferenza, interamente a lui dedicata,
          che lo segua dal primo momento e che gli consigli attrezzature e
          abbigliamento più adatti alle sue richieste. Questo permette al
          personale di indirizzare la propria attenzione solo sul cliente che
          desidera usufruire del servizio.
          <br />
          <br />
          Prenota la tua esperienza con i nostri esperti.
          <br />
          La tua prossima avventura ti attende!
          <br />
          <br />
          Per info e prenotazioni +02 8645 3034
          {/* servizio BUSSOLA */}
        </motion.p>
      </div>
    </section>
  );
};

export default PersonalShopper;
