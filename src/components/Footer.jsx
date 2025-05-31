import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import circlesvg from "../assets/images/footer/SVG Download.svg";
import animatedCircleGif from "../assets/images/footer/circle.webm";
import Marquee from "react-fast-marquee";
import Ropes from "../assets/videos/footer/Ropes video.mp4";

function Footer() {
  const fadeIntextAnimationVarients = {
    before: {
      opacity: 0,
      y: "100%",
    },
    after: {
      opacity: 1,
      y: 0,
    },
    timing: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
    },
  };

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

  const officeText1 = "MAIN OFFICE";
  const officeText2 = "SECOND OFFICE";
  const officeAddress1 = "901 N Pit Street Alexandria VA, 22314";
  const officeAddress2 = "Na Perstyne 342/1, 11000 Parague";

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
          <motion.h1
            variants={fadeIntextAnimationVarients}
            initial="before"
            animate="after"
            transition="timing"
            whileInView={true}
            viewport={{ once: true }}
            className="text-2xl font-extralight flex items-center pl-32 h-38 overflow-hidden"
          >
            SOCIAL MEDIA AND CONTACTS
          </motion.h1>
          <div className="h-auto">
            <ul className="w-full h-full">
              {Object.keys(socialHandles).map((item) => (
                <motion.li
                  key={item}
                  className="relative text-xl overflow-hidden h-32  origin-left border-white/50"
                  initial="rest"
                  whileHover="hover"
                >
                  <a href={socialHandles[item]} className="block h-full w-full">
                    {/* Black list (splitting animation) */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-black text-white flex justify-between items-center px-32 z-0"
                      style={{ transformOrigin: "center" }}
                    >
                      <motion.h1
                        variants={fadeIntextAnimationVarients}
                        initial="before"
                        animate="after"
                        transition="timing"
                        whileInView={true}
                        viewport={{ once: true }}
                        className="text-3xl font-extralight overflow-hidden"
                      >
                        {item}
                      </motion.h1>

                      <motion.i
                        variants={fadeIntextAnimationVarients}
                        initial="before"
                        animate="after"
                        transition="timing"
                        whileInView={true}
                        viewport={{ once: true }}
                        className="ri-arrow-right-up-line text-5xl"
                      ></motion.i>
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
                  <motion.hr
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.5, 0, 0.75, 0] }}
                    className="absolute bottom-0 border-t-[1px] origin-left w-full border-white/50"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3rd div - copyright */}

        <div className="h-128 w-[100%]  px-12 py-24 mb-38 flex justify-start space-x-48 items-center">
          <div className="flex flex-col justify-between py-12 w-[30%] h-full ">
            <div className="flex flex-wrap justify-between space-x-2 ">
              <div className="w-auto h-8 overflow-hidden">
                <motion.h1
                  variants={fadeIntextAnimationVarients}
                  initial="before"
                  animate="after"
                  transition="timing"
                  whileInView={true}
                  viewport={{ once: true }}
                  className="text-xl text-gray-300 font-extralight"
                >
                  MAIN OFFICE
                </motion.h1>
              </div>
              <div className="w-auto h-18 overflow-hidden">
                <motion.p
                  variants={fadeIntextAnimationVarients}
                  initial="before"
                  animate="after"
                  transition={{
                    duration: fadeIntextAnimationVarients.timing.duration,
                    ease: fadeIntextAnimationVarients.timing.ease,
                    delay: 0.3,
                  }}
                  whileInView={true}
                  viewport={{ once: true }}
                  className="text-3xl font-extralight"
                >
                  901 N Pit Street Alexandria VA, 22314
                </motion.p>
              </div>
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
          <div className="flex flex-col justify-between py-12 w-[30%] h-full">
            <div className="flex flex-wrap justify-between space-x-2 ">
              <div className="w-auto h-8 overflow-hidden">
                <motion.h1
                  variants={fadeIntextAnimationVarients}
                  initial="before"
                  animate="after"
                  transition={{
                    duration: fadeIntextAnimationVarients.timing.duration,
                    ease: fadeIntextAnimationVarients.timing.ease,
                    delay: 0.6,
                  }}
                  whileInView={true}
                  viewport={{ once: true }}
                  className="text-xl text-gray-300 font-extralight"
                >
                  SECOND OFFICE
                </motion.h1>
              </div>
              <div className="w-auto h-10 overflow-hidden">
                <motion.p
                  variants={fadeIntextAnimationVarients}
                  initial="before"
                  animate="after"
                  transition={{
                    duration: fadeIntextAnimationVarients.timing.duration,
                    ease: fadeIntextAnimationVarients.timing.ease,
                    delay: 0.9,
                  }}
                  whileInView={true}
                  viewport={{ once: true }}
                  className="text-3xl font-extralight"
                >
                  Na Perstyne 342/1, 11000 Parague
                </motion.p>
              </div>
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
      <div className="h-screen w-screen relative overflow-hidden">
        <div className="h-screen w-screen relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={Ropes}
            autoPlay
            loop
            muted
          />

          <motion.a
            href="/"
            initial="rest"
            whileHover="hover"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 h-[20%] flex justify-center items-center bg-transparent text-white z-20"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-8 py-2 flex flex-col justify-center items-center cursor-pointer"
            >
              <h1 className="text-xl">PRIVACY POLICY</h1>
              <motion.span
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.4, ease: [0.4, 0.01, 0.165, 0.99] }}
                className="w-full h-[2px] bg-white border-t border-white origin-left block"
                style={{ transformOrigin: "center" }}
              ></motion.span>
            </motion.div>
          </motion.a>
        </div>

        <div className="absolute top-0 w-full h-[80%] flex flex-col justify-center items-center  text-white z-10">
          <div className="w-full h-auto overflow-hidden">
            <motion.h1
              variants={fadeIntextAnimationVarients}
              initial="before"
              animate="after"
              transition={{
                duration: fadeIntextAnimationVarients.timing.duration,
                ease: fadeIntextAnimationVarients.timing.ease,
              }}
              whileInView={true}
              viewport={{ once: true }}
              className="w-full text-center text-[200px] leading-none"
            >
              Have
            </motion.h1>
          </div>
          <div className="w-full h-auto overflow-hidden">
            <motion.h1
              variants={fadeIntextAnimationVarients}
              initial="before"
              animate="after"
              transition={{
                duration: fadeIntextAnimationVarients.timing.duration,
                ease: fadeIntextAnimationVarients.timing.ease,
                delay: 0.3,
              }}
              whileInView={true}
              viewport={{ once: true }}
              className="w-full text-center font-extralight italic text-[200px] leading-none"
            >
              an idea?
            </motion.h1>
          </div>

          <motion.button
            initial="rest_button_big"
            whileHover="hover_button_big"
            className="w-[50%] h-[200px] text-[200px] leading-none border-white border-1 rounded-full bg-transparent text-center overflow-hidden"
          >
            <motion.div
              variants={{
                rest_button_big: { y: 0 },
                hover_button_big: { y: ["0%", "-100%"] },
              }}
              transition={{
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full">TELL US</div>
              <div className="w-full h-full bg-white text-black">TELL US</div>
            </motion.div>
          </motion.button>
        </div>

        <div className="absolute bottom-0 w-[30%] h-[20%]  flex justify-between items-center px-8 ">
          <motion.button
            variants={{
              rest: { scale: 1 }, // Default state
              hover: { scale: 1.05 }, // Slight scale pop on hover
            }}
            initial="rest" // Initial state
            whileHover="hover" // Trigger the hover variant
            className="h-8 text-xl w-[45%] border-solid border-white/50 border-1 rounded-full bg-black mx-auto overflow-hidden z-10"
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
              <div className="h-full flex justify-center items-center text-white">
                INFO@CUBERTO.COM
              </div>
              <div className="h-full bg-white text-black rounded-4xl flex justify-center items-center">
                INFO@CUBERTO.COM
              </div>
            </motion.div>
          </motion.button>
          <motion.button
            variants={{
              rest: { scale: 1 }, // Default state
              hover: { scale: 1.05 }, // Slight scale pop on hover
            }}
            initial="rest" // Initial state
            whileHover="hover" // Trigger the hover variant
            className="h-8 text-xl w-[40%] border-solid border-white/50 border-1 rounded-full bg-black mx-auto overflow-hidden"
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
              <div className="h-full flex justify-center items-center text-white">
                +1 0301 549 9309
              </div>
              <div className="h-full bg-white text-black rounded-4xl flex justify-center items-center">
                +1 0301 549 9309
              </div>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Footer;
