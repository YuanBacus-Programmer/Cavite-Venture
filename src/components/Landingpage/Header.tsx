"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "@/assets/HeaderImages/logosaas.png";
import arrowRightUrl from "@/assets/HeaderImages/arrow-right.png";
import crossUrl from "@/assets/HeaderImages/cross.png"; // Import the cross image for the modal

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 bg-white/30 backdrop-blur-sm shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 px-4 md:px-0"
        >
          <p className="text-white/60 hidden md:block">
            Explore CaviteVenture in a more Modern world
          </p>
          <Link href="/signup" className="inline-flex gap-1 items-center group">
            <motion.p
              whileHover={{ color: "#fae8b4" }}
              transition={{ duration: 0.2 }}
            >
              Get Started for Free
            </motion.p>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={arrowRightUrl}
                alt="Arrow right icon"
                height={16}
                width={16}
                className="h-4 w-4 inline-flex justify-center items-center group-hover:translate-x-1 transition-transform duration-300"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>

        <div className="py-5">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Saas logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
              />
              <motion.span
                className="text-lg font-semibold text-black"
                whileHover={{ color: "#fae8b4" }}
                transition={{ duration: 0.2 }}
              >
                CaviteVenture
              </motion.span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:bg-gray-200 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                transition={{ staggerChildren: 0.1 }}
                className="flex gap-6 items-center"
              >
                <motion.div
                  variants={menuVariants}
                  whileHover={{ color: "#fae8b4", textShadow: "0 0 5px #fae8b4, 0 0 10px #fae8b4, 0 0 15px #fae8b4" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/"
                    className="hover:text-[#fae8b4] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  variants={menuVariants}
                  whileHover={{ color: "#fae8b4", textShadow: "0 0 5px #fae8b4, 0 0 10px #fae8b4, 0 0 15px #fae8b4" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/about"
                    className="hover:text-[#fae8b4] transition-colors duration-300"
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  variants={menuVariants}
                  whileHover={{ color: "#fae8b4", textShadow: "0 0 5px #fae8b4, 0 0 10px #fae8b4, 0 0 15px #fae8b4" }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setIsModalOpen(true)} // Opens the modal
                    className="hover:text-[#fae8b4] transition-colors duration-300"
                  >
                    Event
                  </button>
                </motion.div>
                <motion.div
                  variants={menuVariants}
                  whileHover={{ color: "#fae8b4", textShadow: "0 0 5px #fae8b4, 0 0 10px #fae8b4, 0 0 15px #fae8b4" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/signup">
                    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200">
                      Explore for Free
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </nav>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-30 md:hidden"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                >
                  <div className="flex flex-col p-4 gap-4">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="self-end p-2 text-black hover:bg-gray-200 rounded-md transition-colors duration-200"
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </button>
                    <Link
                      href="/"
                      className="hover:text-[#fae8b4] transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-[#fae8b4] transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="hover:text-[#fae8b4] transition-colors duration-300"
                    >
                      Event
                    </button>
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200">
                        Explore for Free
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3"
              >
                <Image
                  src={crossUrl}
                  alt="Close modal"
                  width={20}
                  height={20}
                  priority
                />
              </button>
              <h2 className="text-xl font-semibold mb-4">Restricted Access</h2>
              <p className="mb-4">
                Only signed-in users can access this event. Please sign in to
                continue.
              </p>
              <div className="flex gap-4">
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg w-full"
                  onClick={() => {
                    setIsModalOpen(false);
                    // Navigate to signup page
                    window.location.href = "/signup";
                  }}
                >
                  Continue
                </button>
                <button
                  className="bg-gray-200 text-black px-4 py-2 rounded-lg w-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
