import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <WhatWeDo />
      <FeaturedProducts />
      <PhylosophySection />
      <ResourceSection />
      <InspirationSection />
      {/* Add more sections as needed */}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="h-[200vh] relative">
      <div className="w-full h-[30%] pl-48 text-9xl flex flex-col justify-center">
        {/* First text line */}
        <div className="flex justify-start items-center space-x-4 w-full h-38">
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0,
              }}
              className=" text-black"
            >
              We
            </motion.h1>
          </div>
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.1,
              }}
              className=" text-black "
            >
              are
            </motion.h1>
          </div>
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.2,
              }}
              className=" text-black "
            >
              a
            </motion.h1>
          </div>
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.3,
              }}
              className=" text-black "
            >
              digital
            </motion.h1>
          </div>
        </div>
        {/* Second text line */}
        <div className="flex justify-start items-center space-x-4 h-38">
          <motion.video
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0, 0.55, 0.45, 1], delay: 0.4 }}
            preload="auto"
            src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Cuberto%20Header%20(1).webm"
            className="w-42 rounded-full"
            autoPlay
            loop
          ></motion.video>
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.52,
              }}
              className="px-2 italic font-extralight text-black "
            >
              design
            </motion.h1>
          </div>
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.64,
              }}
              className="  text-black "
            >
              and
            </motion.h1>
          </div>
        </div>
        {/* Third text line */}
        <div className="flex justify-start items-center space-x-4 h-38">
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.76,
              }}
              className="  text-black "
            >
              motion
            </motion.h1>
          </div>
          <div className="w-auto h-full overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.88,
              }}
              className="  text-black "
            >
              agency
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[70%] overflow-hidden custom-hover">
        <motion.video
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0, 0.55, 0.45, 1] }}
          preload="auto"
          src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Cuberto%20Showreel.webm
"
          className="w-full h-full object-cover z-0 origin-bottom "
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
}

export default Home;

function WhatWeDo() {
  return (
    <section className="flex h-[100vh]">
      <div className="w-[50%] h-full flex justify-center items-center">
        <motion.video
          initial={{ scaleY: 0, scaleX: 0 }}
          whileInView={{ scaleY: 1, scaleX: 1 }}
          transition={{
            duration: 1,
            ease: [0, 0.55, 0.45, 1],
            delay: 0.5,
          }}
          viewport={{ once: true, margin: "200px" }}
          preload="auto"
          src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/C%203D%20(1).webm
"
          autoPlay
          muted
          loop
          className="focus: outline-none"
          tabIndex={-1}
          style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        />
      </div>
      <div className="w-[50%] h-full">
        <div className=" h-full flex flex-col justify-center items-start space-y-16 ">
          <div className="overflow-hidden ">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                deplay: 0.5,
              }}
              viewport={{ once: true, margin: "200px" }}
              className="text-4xl w-[70%]"
            >
              Cuberto is a leading digital product agency focused on branding,
              UI/UX design, mobile, and web development.
            </motion.h1>
          </div>

          <motion.button
            initial="rest"
            whileHover="hover"
            whileInView={{ scaleY: 1, scaleX: 1, opacity: 1 }}
            variants={{
              rest: { scale: 1, scaleX: 0, scaleY: 0, opacity: 0 },
              hover: { scale: 1.05 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            viewport={{ once: true, margin: "200px" }}
            className="flex justify-center items-center w-[60%] text-3xl h-[25%] border-1 rounded-full overflow-hidden z-0"
          >
            <motion.div
              variants={{
                rest: { scaleY: 0 },
                hover: { scaleY: 1 },
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute bottom-0 left-0 w-full h-full bg-black origin-bottom z-0 "
            />
            <div className=" w-1/2 h-12 overflow-hidden z-10">
              <motion.div
                variants={{
                  rest: { y: 0 },
                  hover: { y: "-100%" },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-full"
              >
                <div className="w-full h-full flex justify-center items-center">
                  <h1>What we do</h1>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <h1 className="text-white">What we do</h1>
                </div>
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

import leftImg1 from "../assets/images/project image/Cover 1200x1600.jpg";
import leftImg2 from "../assets/images/project image/Cover 1200x1200.jpg";
import leftImg3 from "../assets/images/project image/Cover 1200x1200 (1).jpg";
import leftImg4 from "../assets/images/project image/Cover 1200x1600 (3).jpg";
import leftImg5 from "../assets/images/project image/Cover 1200x1200 (3).jpg";
import leftImg6 from "../assets/images/project image/Cover 1200x1200.jpg";

import RightImg1 from "../assets/images/project image/Cover 1200x1600 (1).jpg";
import RightImg2 from "../assets/images/project image/Cover 1200x1600 (2).jpg";
import RightImg3 from "../assets/images/project image/Cover 1200x1200 (2).jpg";
import RightImg4 from "../assets/images/project image/Cover 1200x1600 (4).jpg";
import RightImg5 from "../assets/images/project image/Cover 1200x1200 (5).jpg";

const contentDetails = {
  leftSection: {
    element1: {
      image: leftImg1,
      elementSize: "large",
      Title: "Punto Pago",
      disc: "The First Super-App in Latin America",
    },

    element2: {
      image: leftImg2,
      elementSize: "Small",
      Title: "DaoWay",
      disc: "Astrology planner app: plan, achive, thrive",
    },

    element3: {
      image: leftImg3,
      elementSize: "Small",
      Title: "Riyadh",
      disc: "Official website of Riyadh, Saudi Arabia's capital",
    },

    element4: {
      image: leftImg4,
      elementSize: "large",
      Title: "Qvino",
      disc: "Wine marketplace with interactive learning",
    },
    element5: {
      image: leftImg5,
      elementSize: "Small",
      Title: "Potion",
      disc: "Sales tool for increasing conversions",
    },

    element6: {
      image: leftImg6,
      elementSize: "Small",
      Title: "Cisco",
      disc: "Cloud based network management",
    },
  },

  rightSection: {
    element1: {
      image: RightImg1,
      elementSize: "large",
      Title: "Kelvin Zero",
      disc: "A digital product for passwordless authentication",
    },

    element2: {
      image: RightImg2,
      elementSize: "large",
      Title: "Magma",
      disc: "The ultimate tool for building in the Web3 era",
    },

    element3: {
      image: RightImg3,
      elementSize: "small",
      Title: "FlipClip",
      disc: "The best tool for stop-motion animation",
    },

    element4: {
      image: RightImg4,
      elementSize: "large",
      Title: "Zelt",
      disc: "Run HR, IT & Finance in one place",
    },

    element5: {
      image: RightImg5,
      elementSize: "large",
      Title: "Ferrumpipe",
      disc: "Galvanized steel metal frame manufacturer",
    },
  },
};

function FeaturedProducts() {
  return (
    <section className="h-auto w-full bg-black rounded-t-[100px]">
      <div className="px-24 py-24 text-white mb-34">
        <div className="h-[175px]">
          <div className="h-[175px] flex items-center w-full overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-[150px] w-full"
            >
              Featured
            </motion.h1>
          </div>
        </div>
        <div className="h-[175px] text-[150px] font-extralight italic flex justify-start items-center space-x-6">
          <motion.video
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.55, 0.45, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            preload="auto"
            src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Cuberto%20Header.webm
"
            autoPlay
            loop
            muted
          ></motion.video>
          <div className="w-full h-full flex items-center overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                delay: 0.4,
              }}
            >
              projects
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="w-[80%]  h-auto flex">
        <div className="w-1/2 h-auto text-white">
          {Object.values(contentDetails.leftSection).map((element, index) => (
            <div className=" h-auto w-[80%] mx-auto" key={index}>
              <div className="w-auto h-auto overflow-hidden rounded-[40px]">
                <motion.img
                  initial={{ y: "100px", opacity: 0, scale: 1 }}
                  whileInView={{ y: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 0.6 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.55, 0.45, 1],
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  className="w-full rounded-[40px] h-auto"
                  src={element.image}
                  alt=""
                />
              </div>

              <div className="mt-8 mb-34 flex justify-start items-center space-x-4 overflow-hidden">
                <motion.h1
                  initial={{ y: ["100px"], opacity: 0 }}
                  animate={{ y: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.55, 0.45, 1],
                    delay: 0.1,
                  }}
                  className="font-bold text-3xl"
                >
                  {element.Title}
                  <span className="font-extralight"> - {element.disc}</span>
                </motion.h1>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 h-auto text-white mt-128">
          {Object.values(contentDetails.rightSection).map((element, index) => (
            <div className=" h-auto w-[80%] mx-auto" key={index}>
              <div className="w-auto h-auto overflow-hidden rounded-[40px]">
                <motion.img
                  initial={{ y: ["100px"], opacity: 0, scale: 1 }}
                  whileInView={{ y: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 0.6 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.55, 0.45, 1],
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  className="w-full rounded-[40px] h-auto"
                  src={element.image}
                  alt=""
                />
              </div>

              <div className="mt-8 mb-34 flex justify-start items-center space-x-4">
                <motion.h1
                  initial={{ y: ["100px"], opacity: 0 }}
                  animate={{ y: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.55, 0.45, 1],
                    delay: 0.1,
                  }}
                  className="font-bold text-3xl"
                >
                  {element.Title}
                  <span className="font-extralight"> - {element.disc}</span>
                </motion.h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import bubbleVideo from "../assets/videos/circles balls.mp4";

function PhylosophySection() {
  return (
    <section className="relative w-full min-h-[120vh] bg-black flex items-end">
      {/* White rounded background */}
      <div className="absolute top-0 left-0 w-full h-full bg-white rounded-t-[100px] z-0" />
      {/* Content */}
      <div className="relative w-full max-w-screen-xl mx-auto py-32 z-10">
        {/* Headings */}
        <div className="mb-20">
          <div className="flex flex-col leading-none">
            <div className="w-full h-full overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="text-[10vw] md:text-[180px] font-normal m-0 p-0 leading-[0.95] tracking-tight"
                style={{ lineHeight: 1 }}
              >
                Our
              </motion.h1>
            </div>
            <div className="w-full h-full overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.35,
                }}
                viewport={{ once: true }}
                className="italic font-extralight text-[10vw] md:text-[180px] m-0 p-0 leading-[0.95] tracking-tight"
                style={{ lineHeight: 1 }}
              >
                philosophy
              </motion.h1>
            </div>
          </div>
        </div>
        {/* Video and Text Row */}
        <div className="w-full h-[640px] flex justify-between ">
          <motion.video
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.55, 0.45, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            preload="auto"
            src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Circles%20Balls%20(1).webm
"
            autoPlay
            loop
            muted
            className="focus: outline-none"
            tabIndex={-1}
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          ></motion.video>
          <div className="flex flex-col justify-center space-y-8">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="text-3xl"
              >
                In our team, developers work alongside designers, strategists
                and analysts. Cuberto doesn't do cookie-cutter solutions and we
                build products exactly as they were during the design phase, no
                short cuts or simplifications.
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                className="text-3xl"
              >
                We're driven by user‑centered design that drives productivity
                and increases revenue. Our expertise and ingenuity are
                remarkable, yet we always strive to outdo and outperform our
                previous achievements.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import MImg1 from "../assets/images/home-marquee/Image 904x510.png";
import MImg2 from "../assets/images/home-marquee/Image 904x510 (1).png";
import MImg3 from "../assets/images/home-marquee/Image 904x510 (2).png";
import MImg4 from "../assets/images/home-marquee/Image 904x510 (4).png";
import MImg5 from "../assets/images/home-marquee/Image 904x510.jpg";
import MImg6 from "../assets/images/home-marquee/Image 904x510 (3).png";
import { div, img } from "framer-motion/client";

const recourceData = {
  element1: {
    img: MImg1,
    desc: "How to Make UI/UX Website // HTML and CSS development",
  },
  element2: {
    img: MImg2,
    desc: "How to Cook an Emotional Site // Web Development",
  },
  element3: {
    img: MImg3,
    desc: "How to Make Epic Website // Frontend Development",
  },
  element4: {
    img: MImg4,
    desc: "Cuberto Mouse Follower",
  },
  element5: {
    img: MImg5,
    desc: "Making Swithc with SVG DIstortion Effect",
  },
  element6: {
    img: MImg6,
    desc: "UI/UX Design Tips / Volume 9",
  },
};

function ResourceSection() {
  return (
    <section className="relative w-full h-[230vh] bg-white text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black rounded-t-[100px]">
        {/* 1st heding section */}
        <div className="mb-20">
          <div className="flex flex-col leading-none pt-64 pb-24 px-44">
            <div className="w-full h-full overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="text-[10vw] h-[380px] md:text-[180px] font-normal m-0 p-0 leading-none "
                style={{ lineHeight: 1 }}
              >
                Development and design
              </motion.h1>
            </div>
            <div className="w-full h-full overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.35,
                }}
                viewport={{ once: true }}
                className="italic font-extralight text-[10vw] m-0 p-0 leading-none"
                style={{ lineHeight: 1 }}
              >
                resources
              </motion.h1>
            </div>
          </div>
        </div>
        {/* 2nd marquee section */}
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide ">
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              ease: [0, 0.55, 0.45, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            drag="x"
            dragConstraints={{ left: -2250, right: 0 }}
            dragElastic={0.1}
            className="flex justify-around items-center space-x-10 h-[45vh] ml-44 "
          >
            {Object.values(recourceData).map((item, index) => (
              <div key={index} className="w-142 h-full flex-shrink-0">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0, 0.55, 0.45, 1] }}
                  src={item.img}
                  alt=""
                  draggable="false"
                  className="w-full h-3/4 object-cover rounded-3xl"
                />
                <p className="text-2xl  mt-12">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* 3rd text section */}
        <div className="w-full h-[50vh]   my-28 flex justify-end items-center">
          <div className=" w-[50%] ">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="w-[75%] text-3xl"
              >
                We regularly release design courses, offer advice to newbie
                designers, walk you through creating awesome effects, and share
                source files.
              </motion.p>
            </div>

            <motion.button
              variants={{
                rest: { scale: 1 }, // Default state
                hover: { scale: 1.05 }, // Slight scale pop on hover
              }}
              initial="rest" // Initial state
              whileHover="hover" // Trigger the hover variant
              className="h-16 text-3xl w-[50%] border-solid border-white/50 border-1 rounded-full bg-black mx-auto overflow-hidden font-extralight mt-8"
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
                  VIEW ALL RESOURCES
                </div>
                <div className="h-full bg-white text-black rounded-4xl flex justify-center items-center">
                  VIEW ALL RESOURCES
                </div>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Marquee from "react-fast-marquee";
import inspoSectionVideo from "../assets/videos/Header video.mp4";

import img1 from "../assets/images/home-marquee/inspo section marquee/Original Image 400x300 (1).png";
import img2 from "../assets/images/home-marquee/inspo section marquee/Original Image 400x300 (2).png";
import img3 from "../assets/images/home-marquee/inspo section marquee/Original Image 400x300.png";
import img4 from "../assets/images/home-marquee/inspo section marquee/Original Image 400x300.jpg";
import img7 from "../assets/images/home-marquee/inspo section marquee/Still 400x300 (2).png";
import img8 from "../assets/images/home-marquee/inspo section marquee/Still 400x300 (3).png";
import img9 from "../assets/images/home-marquee/inspo section marquee/Still 400x300 (4).png";
import img10 from "../assets/images/home-marquee/inspo section marquee/Still Image 400x300.png";

const inspoImg = {
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4,
  img7: img7,
  img8: img8,
  img9: img9,
  img10: img10,
};

function InspirationSection() {
  return (
    <section className="w-full h-[110vh]">
      <div className="w-full h-[300px] my-36 ">
        <Marquee speed={175}>
          <div className="flex justify-around items-center space-x-10 text-[200px]  italic font-extralight">
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
            <video
              className="h-[200px] rounded-full"
              autoPlay
              loop
              muted
              preload="auto"
              src="https://cdn.jsdelivr.net/gh/Prarouu/cuberto_replicate@main/public/Header%20video%20from%20CloudConvert.webm
"
            ></video>
            <h1>New Day</h1>
            <i class="ri-subtract-fill"></i>
            <h1>New Inspo</h1>
          </div>
        </Marquee>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.55, 0.45, 1],
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -1600, right: 0 }}
            dragElastic={0.1}
            className=" h-[50vh] flex justify-around items-center space-x-6 mt-34 ml-44 py-24 overflow-x-auto overflow-y-hidden flex-shrink-0 scrollbar-hide min-w-max"
          >
            {Object.values(inspoImg).map((img, index) => (
              <div
                key={index}
                className=" h-[300px] w-[360px] flex flex-col items-center justify-between"
              >
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0, 0.55, 0.45, 1] }}
                  src={img}
                  alt=""
                  className="h-[90%] w-full object-cover rounded-2xl mb- bg-black"
                  draggable="false"
                />
                <div className="w-full h-[10] flex justify-start space-x-2 font-extralight mt-4">
                  <i className="ri-basketball-line text-2xl mb-2"></i>
                  <h1 className="text-lg font-bold">cuberto</h1>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
