import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialHandles = {
    linkdin: "/",
    behance: "/",
    dribble: "/",
    instagram: "/",
    youtube: "/",
    twitter: "/",
    github: "/",
  };

  const menuitems = {
    "What we do": "/",
    Projects: "/",
    Company: "/",
    Tutorials: "/",
    Contact: "/",
  };

  return (
    <>
      <nav className="flex justify-between items-center h-28 w-100% px-12">
        <div>
          <a href="/">
            <img
              className="h-14 w-auto fit-cover"
              src="https://searchvectorlogo.com/wp-content/uploads/2020/12/cuberto-logo-vector.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-28">
          <button
            onClick={handleMenu}
            className="h-6 w-full flex justify-between items-center"
          >
            <h1 className="text-2xl font-extralight">menu</h1>
            <i className="ri-menu-5-line text-2xl fixed right-14"></i>
          </button>
        </div>

        {/* side menu bar */}

        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: isMenuOpen ? 0 : 1000 }}
          transition={{
            duration: 0.5,
            ease: [0.2, 0.71, 0.2, 1.05],
          }}
          exit={{ opacity: 0, x: 1000 }}
          className={`fixed bg-white z-3 top-0 right-0 w-5/12 h-screen `}
        >
          <div className="relative w-full h-24 mb-24 flex">
            <button
              onClick={handleMenu}
              className="absolute h-full w-1/5 right-0 top-0"
            >
              <i class="ri-collapse-horizontal-line text-3xl"></i>
            </button>
          </div>
          <div className="h-[60%] flex justify-around items-start">
            <div className="h-full text-left w-2/5 pl-14">
              <h1 className="text-gray-600 text-xl font-extralight pb-12">
                Social Media
              </h1>
              <ul className="h-[60%] text-xl flex flex-col justify-around items-start">
                {Object.keys(socialHandles).map((item) => (
                  <li key={item} className="text-xl overflow-hidden">
                    <a href={socialHandles[item]} className="font-extralight">
                      <motion.div
                        initial={{ y: 0 }}
                        whileHover={{ y: -50 }}
                        transition={{
                          duration: 1,
                          ease: [0.2, 0.71, 0.1, 1.01],
                        }}
                        className="h-12 w-full"
                      >
                        <div className="h-full w-full">
                          <h1 className="text-xl">{item}</h1>
                        </div>
                        <div className="h-full w-full">
                          <h1 className="text-xl">{item}</h1>
                        </div>
                      </motion.div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full text-left w-3/5">
              <h1 className="text-xl text-gray-600 font-extralight pb-12">
                Menu
              </h1>
              <ul className="h-[80%] text-xl flex flex-col justify-around items-start">
                {Object.keys(menuitems).map((item) => (
                  <li key={item} className="text-6xl overflow-hidden">
                    <a href={menuitems[item]}>
                      <motion.div
                        initial={{ y: 0 }}
                        transition={{
                          duration: 1,
                          ease: [0.2, 0.71, 0.1, 1.01],
                        }}
                        whileHover={{ y: -100 }}
                        className="h-24 w-full"
                      >
                        <div className="h-full w-full">
                          <h1 className="font-extralight">{item}</h1>
                        </div>
                        <div className="h-full w-full">
                          <h1 className="font-extralight">{item}</h1>
                        </div>
                      </motion.div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[70%] pl-14 py-8">
            <h1 className="text-gray-400 text-xl font-extralight">
              GET IN TOUCH
            </h1>
            <div className="h-24 w-full flex justify-between items-center">
              <a href="/" className="relative">
                <motion.div
                  initial={{ opacity: 0.25 }}
                  whileHover={{ opacity: 1 }}
                  className="bg-transparent border-b-2"
                >
                  <h1 className="text-2xl p-1">info@cuberto.com</h1>
                </motion.div>
              </a>
              <a href="/">
                <motion.div
                  initial={{ opacity: 0.25 }}
                  whileHover={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.2, 0.71, 0.2, 1.05],
                  }}
                  className="bg-transparent border-b-2 origin-center"
                >
                  <h1 className="text-2xl p-1">Our Workflow</h1>
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}

export default Header;
