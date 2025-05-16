import React from "react";
import { motion, scale } from "framer-motion";
import circlesvg from "../assets/images/footer/SVG Download.svg";
import animatedCircleGif from "/Users/praroop/Documents/cuberto_repo/src/assets/images/footer/circle.webm";
import Marquee from "react-fast-marquee";
import { li } from "framer-motion/client";

function Footer() {
  const socialHandles = {
    Linkdin: "/",
    Behance: "/",
    Dribble: "/",
    Instagram: "/",
    Youtube: "/",
    Twitter: "/",
    Github: "/",
  };

  const divValues = {
    marquee:
      "h-32 w-full bg-white text-black text-3xl flex justify-between items-center ",
  };

  return (
    <>
      {/* upper footer */}
      <div className="bg-black text-white w-full overflow-hidden">
        {/* 1st div - footer */}
        <Marquee
          speed={175}
          className="h-132 pt-42 pb-18 flex justify-start items-center flex-nowrap overflow-hidden"
        >
          <div className="flex justify-between items-center ml-8">
            <div className="w-[1100px] object-cover  flex justify-between items-center">
              <h1 className="text-[200px]">Follow Us</h1>
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="h-[200px] w-auto"
                >
                  <img
                    src={circlesvg}
                    alt=""
                    className="h-[200px] px-2 w-auto"
                  />
                </motion.div>
                <video
                  src={animatedCircleGif}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[100px  absolute top-6  left-8  w-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center ml-8">
            <div className="w-[1100px] object-cover  flex justify-between items-center">
              <h1 className="text-[200px]">Follow Us</h1>
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="h-[200px] w-auto"
                >
                  <img
                    src={circlesvg}
                    alt=""
                    className="h-[200px] px-2 w-auto"
                  />
                </motion.div>
                <video
                  src={animatedCircleGif}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[100px  absolute top-6  left-8  w-auto"
                />
              </div>
            </div>
          </div>
        </Marquee>

        {/* 2nd div - social handles */}
        <div>
          <h1 className="text-2xl font-extralight flex items-center pl-32 h-38">
            SOCIAL MEDIA AND CONTACTS
          </h1>
          <div className="h-auto">
            <ul className="w-full h-full">
              {Object.keys(socialHandles).map((item) => (
                <motion.li
                  key={item}
                  className="relative text-xl overflow-hidden h-32 border-b border-white/50"
                  initial="rest"
                  whileHover="hover"
                >
                  <a href={socialHandles[item]} className="block h-full w-full">
                    {/* Black list (splitting animation) */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-black text-white flex justify-between items-center px-32 z-0"
                      style={{ transformOrigin: "center" }}
                    >
                      <h1 className="text-3xl font-extralight">{item}</h1>
                      <i className="ri-arrow-right-up-line text-5xl"></i>
                    </motion.div>

                    {/* Marquee white list */}
                    <motion.div
                      variants={{
                        rest: { scaleY: 0, originY: 0.5 }, // Default state
                        hover: { scaleY: 1, originY: 0.5 }, // Split from the middle
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.2, 0.71, 0.1, 1.01],
                      }}
                      className="absolute top-0 left-0 w-full h-full bg-white text-black flex items-center z-10"
                    >
                      <Marquee
                        speed={200}
                        className={`${divValues.marquee} w-full`}
                      >
                        <div className="flex w-full items-center space-x-8">
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                          <h1 className="text-3xl font-extralight">{item}</h1>
                          <i className="ri-arrow-right-up-line text-5xl"></i>
                        </div>
                      </Marquee>
                    </motion.div>
                  </a>
                </motion.li>
              ))}
              <hr className="border-t border-white/50" />
            </ul>
          </div>
        </div>

        {/* 3rd div - copyright */}

        <div className="h-128 w-[100%]  px-12 py-24 flex justify-start space-x-48 items-center">
          <div className="flex flex-col justify-between py-12 w-[30%] h-full ">
            <div className="flex flex-wrap justify-between space-x-2 ">
              <h1 className="text-xl text-gray-300 font-extralight">
                MAIN OFFICE
              </h1>
              <p className="text-3xl font-extralight">
                901 N Pit Street Alexandria VA, 22314
              </p>
            </div>
            <motion.button
              variants={{
                rest: { scale: 1 }, // Default state
                hover: { scale: 1.05 }, // Slight scale pop on hover
              }}
              initial="rest" // Initial state
              whileHover="hover" // Trigger the hover variant
              className="h-18 text-3xl w-full border-solid border-white/50 border-1 rounded-full bg-black mx-auto overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { y: 0 }, // Default position
                  hover: { y: ["0%", "-100%"] }, // Move up on hover
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full h-full"
              >
                <div className="h-full flex justify-center items-center">
                  Info@cuberto.com
                </div>
                <div className="h-full bg-white text-black rounded-4xl flex justify-center items-center">
                  Info@cuberto.com
                </div>
              </motion.div>
            </motion.button>
          </div>
          <div className="flex flex-col justify-between py-12 w-[30%] h-full ">
            <div className="flex flex-wrap justify-between space-x-2 ">
              <h1 className="text-xl text-gray-300 font-extralight">
                SECOND OFFICE
              </h1>
              <p className="text-3xl font-extralight">
                Na Perstyne 342/1, 11000 Parague
              </p>
            </div>
            <motion.button
              variants={{
                rest: { scale: 1 }, // Default state
                hover: { scale: 1.05 }, // Slight scale pop on hover
              }}
              initial="rest" // Initial state
              whileHover="hover" // Trigger the hover variant
              className="h-18 text-3xl w-full border-solid border-white/50 border-1 rounded-full bg-black mx-auto overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { y: 0 }, // Default position
                  hover: { y: ["0%", "-100%"] }, // Move up on hover
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full h-full"
              >
                <div className="h-full flex justify-center items-center">
                  +1 301 549 3903
                </div>
                <div className="h-full bg-white text-black rounded-4xl flex justify-center items-center">
                  +1 301 549 3903
                </div>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* lower footer */}
    </>
  );
}

export default Footer;
