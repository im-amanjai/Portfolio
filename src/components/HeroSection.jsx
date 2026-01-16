import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import profilePic from "../assets/amannnn.png";
import useTheme from "../context/ThemeContext";

/* Snow Background */
const Snow = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    {[...Array(50)].map((_, i) => (
      <span
        key={i}
        className="absolute top-[-10px] w-[2px] h-[2px] rounded-full bg-white/30 animate-snow"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 12}s`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const techStack = [
    { icon: <FaReact />, color: "#61DBFB", distance: 140, delay: 0 },
    { icon: <FaNodeJs />, color: "#68A063", distance: 130, delay: 0.5 },
    { icon: <SiMongodb />, color: "#47A248", distance: 160, delay: 1 },
    { icon: <FaHtml5 />, color: "#E34F26", distance: 135, delay: 1.5 },
    { icon: <SiExpress />, color: isDarkMode ? "#fff" : "#000", distance: 120, delay: 2 },
    { icon: <FaJs />, color: "#F7DF1E", distance: 170, delay: 2.5 },
    { icon: <SiPostman />, color: "#FF6C37", distance: 150, delay: 3 },
  ];

  return (
    <section
      id="home"
      ref={ref}
      style={{ backgroundColor: theme.background }}
      className="relative min-h-[85vh] flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 pt-12 md:pt-16 overflow-hidden transition-colors duration-500"
    >
      <Snow />

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="px-6 py-2 rounded-full font-semibold"
          style={{
            backgroundColor: isDarkMode
              ? "rgba(99,102,241,0.15)"
              : "rgba(99,102,241,0.1)",
            color: theme.primary,
            border: `1px solid ${theme.border}`,
          }}
        >
          Full Stack Developer (Fresher)
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ color: theme.textMain }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
        >
          Aman{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
            Jaiswal
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ color: theme.textSecondary }}
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-md md:max-w-xl"
        >
          I build <b>modern, scalable MERN applications</b> and backend-driven web solutions, including RESTful APIs and secure authentication workflows.
          I also develop clean <span className="text-green-500 font-bold">React </span> interfaces with a focus on performance, problem-solving, and real-world usability.
        </motion.p>

        <div className="hidden md:flex gap-4 mt-4">
          <a
            href="#projects"
            style={{ backgroundColor: theme.primary }}
            className="px-8 py-3 rounded-full text-white font-bold shadow-xl hover:scale-105 transition"
          >
            Explore Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            style={{ color: theme.textMain, border: `2px solid ${theme.border}` }}
            className="px-8 py-3 rounded-full font-bold hover:bg-gray-500/5 transition flex items-center gap-2"
          >
            <FiDownload /> Resume
          </a>
        </div>
      </div>

      {/* Profile + Orbiting Tech */}
      <div className="relative mt-10 md:mt-0 mx-auto w-72 h-72 md:w-[380px] md:h-[380px] z-10">
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full blur-[100px] opacity-25"
          style={{ backgroundColor: theme.primary }}
        />

        {/* Profile Image */}
        <div
          className="relative z-20 w-full h-full rounded-full overflow-hidden border-[3px]"
          style={{ borderColor: theme.primary }}
        >
          <img
            src={profilePic}
            alt="Aman"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition"
          />
        </div>

        {/* Orbiting Tech Icons */}
{/* Orbiting Tech Icons */}
{techStack.map((tech, i) => {
  const angle = (360 / techStack.length) * i;

  return (
    <motion.div
      key={i}
      className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      animate={{ rotate: angle + 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        delay: tech.delay,
      }}
    >
      <div
        className="text-2xl md:text-4xl"
        style={{
          color: tech.color,
          opacity: 0.7,
          transform: `translateY(-180px) rotate(-${angle}deg)`,
        }}
      >
        {tech.icon}
      </div>
    </motion.div>
  );
})}

      </div>

      {/* Mobile Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex md:hidden flex-col sm:flex-row gap-4 mt-8 items-center w-full justify-center"
      >
        <a
          href="#projects"
          style={{ backgroundColor: theme.primary }}
          className="px-10 py-4 rounded-full text-white font-bold shadow-xl hover:scale-105 transition"
        >
          Explore Projects
        </a>
        <a
          href="/Resume.pdf"
          download
          style={{ color: theme.textMain, border: `2px solid ${theme.border}` }}
          className="px-10 py-4 rounded-full font-bold hover:bg-gray-500/5 transition flex items-center gap-2"
        >
          <FiDownload /> Resume
        </a>
      </motion.div>

      {/* Snow Animation */}
      <style>
        {`
          @keyframes snow {
            to { transform: translateY(110vh); }
          }
          .animate-snow {
            animation-name: snow;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
