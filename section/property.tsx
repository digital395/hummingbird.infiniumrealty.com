"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Popup from "@/components/popup";
import { isLeadValid } from "@/utils/LeadVerification";

type Property = {
  type: string;
  image: string;
  title: string;
  area: string;
};

const apartmentProperties: Property[] = [
  {
    type: "3 BHK Apartment",
    image: "/images/property/3-bhk.webp",
    title: "3 BHK",
    area: "1,481 sq.ft.",
  },
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

export default function ChooseYourHome() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

const handlePriceClick = () => {
  if (isLeadValid()) {
    const link = document.createElement("a");

    link.href = "/brochure.pdf";
    link.download = "Codename-Humming-Bird-Brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return;
  }

  setIsPopupOpen(true);
};

  return (
    <section
      className="w-full overflow-hidden bg-[#E8F7F7]"
      id="details"
    >
      <div
        className="
          mx-auto
          w-full
              px-5
      py-8
      lg:px-12
      lg:py-10
        "
      >
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: easeInOut,
          }}
          className="
            flex
            flex-col
            items-center
            gap-6
            text-center

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:text-left
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              lg:items-start
            "
          >
            {/* SECTION LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                ease: easeInOut,
              }}
              className="
                flex
                flex-col
                items-center

                lg:items-start
              "
            >
              <p
                className="
                  m-0
                  text-[14px]
                  font-bold
                  leading-3.25
                  tracking-[0.1px]
                  text-[#0F8B8D]
                  lg:text-[16px]
                  lg:leading-4
                "
              >
                CHOOSE YOUR HOME
              </p>

              {/* Animated underline */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "163px",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: easeInOut,
                }}
                className="
                  mt-1.75
                  h-px
                  bg-[#0F8B8D]

                  lg:h-0.5
                  lg:w-47.5
                "
              />
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: easeInOut,
              }}
              className="
                m-0
                mt-5.25
                text-[18px]
                font-bold
                leading-6
                text-[#0B7375]
                xl:text-[30px]
                xl:leading-9.5
              "
            >
              Two ways to live in tune
            </motion.h2>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.2,
                ease: easeInOut,
              }}
              className="
                m-0
                mt-1.75
                text-[15px]
                font-normal
                leading-5.25
                text-[#0F8B8D]

                sm:text-[16px]
                sm:leading-5.5

                lg:text-[18px]
                lg:leading-6.5

                xl:text-[19px]
                xl:leading-7
              "
            >
              Pick Apartment and see what is on offer.
            </motion.p>
          </div>

          {/* =======================================================
              VILLAS LABEL
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: easeInOut,
            }}
            className="
              flex
              w-fit
              shrink-0
              items-center
              justify-center
              rounded-[11px]
              bg-white
              p-1.25
              shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            "
          >
            <div
              className="
                flex
                h-9.5
                items-center
                justify-center
                rounded-[7px]
                bg-[#0F8B8D]
                px-2.75
                text-[14px]
                font-bold
                leading-none
                text-white
                shadow-sm
               md:h-12.5
                md:px-5.75
                md:text-[14px]
              "
            >
              Apartment · 3 BHK
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================
            Apartment  CARDS
        ========================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
className="
  mt-10
  flex
  w-full
  flex-col
  items-center
  gap-6

  sm:mt-12
  sm:gap-7

  lg:mt-13.75
  lg:grid
lg:grid-cols-1
  lg:items-stretch
  lg:gap-9

  xl:gap-10.5
"
          >
            {apartmentProperties.map((property) => (
<motion.article
  key={property.area}
  variants={cardVariants}
  whileHover={{ y: -6 }}
  transition={{
    y: {
      duration: 0.35,
      ease: easeInOut,
    },
  }}
  className="
    w-full
    overflow-hidden
    rounded-[18px]
    border
    border-[#0F8B8D]/20
    bg-white
    p-5
    shadow-[0_2px_10px_rgba(0,0,0,0.04)]

    lg:col-span-3
    lg:p-6

    xl:p-7
  "
>
  <div
    className="
      lg:grid
      lg:grid-cols-[1.1fr_0.9fr]
      lg:gap-8
      xl:grid-cols-[1.15fr_0.85fr]
      xl:gap-10
    "
  >
    {/* FLOOR PLAN */}
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: easeInOut,
      }}
      className="
        relative
        flex
        h-40.5
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-[#0F8B8D]/30
        bg-[#F2FFFF]

        lg:h-95
        lg:rounded-[14px]

        xl:h-105
      "
    >
      {property.image ? (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}
        >
          <Image
            src={property.image}
            alt={`${property.type} floor plan`}
            fill
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 50vw,
              60vw
            "
            className="object-contain object-center"
          />
        </motion.div>
      ) : (
        <span
          className="
            relative
            z-10
            text-center
            text-[14px]
            font-normal
            text-[#0F8B8D]
          "
        >
          FLOOR PLAN · {property.type}
        </span>
      )}
    </motion.div>

    {/* CONTENT */}
    <div className="pt-5 lg:flex lg:flex-col lg:justify-center lg:pt-0">

      {/* TITLE + TYPE */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <h3
          className="
            m-0
            text-[20px]
            font-bold
            leading-none
            tracking-[-0.5px]
            text-[#0B7375]

            lg:text-[34px]
            xl:text-[38px]
          "
        >
          {property.title}
        </h3>

        <span
          className="
            shrink-0
            text-[15px]
            font-medium
            leading-none
            text-[#0F8B8D]

            lg:text-[16px]
          "
        >
          {property.type}
        </span>
      </div>

      {/* AREA */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          gap-4

          lg:mt-8
        "
      >
        <p
          className="
            m-0
            text-[15px]
            font-medium
            leading-none
            text-[#0F8B8D]

            lg:text-[17px]
          "
        >
          Super built-up area
        </p>

        <p
          className="
            m-0
            shrink-0
            text-[20px]
            font-bold
            leading-8
            tracking-[-0.3px]
            text-[#0B7375]

            md:text-[25px]
            lg:text-[28px]
          "
        >
          {property.area}
        </p>
      </div>

      {/* CTA */}
      <motion.button
        type="button"
onClick={handlePriceClick}        whileHover={{
          backgroundColor: "#0B7375",
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="
          mt-5
          flex
          h-10
          w-full
          items-center
          justify-center
          rounded-xl
          bg-[#0F8B8D]
          px-5
          text-[15px]
          font-semibold
          leading-none
          text-white
          transition-colors
          duration-200

          md:h-15
          md:text-[17px]

          lg:mt-9
          lg:h-14
          lg:text-[16px]

          xl:h-15
        "
      >
        Get price &amp; floor plan
      </motion.button>
    </div>
  </div>
</motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================
          POPUP
      ========================================================== */}

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Get Price & Floor Plan"
        download={true}
      />
    </section>
  );
}
