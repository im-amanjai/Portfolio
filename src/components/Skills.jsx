import React, { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useAnimation } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiBootstrap,
  SiMui,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import useTheme from "../context/ThemeContext";

const Skills = () => {
  const { theme, isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // viewport detection
  const isInView = useInView(sectionRef, { margin: "-100px" });

  const skillSet = [
    { name: "Java", icon: <FaJava />, color: "#E76F00" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "API Testing", icon: <SiPostman />, color: "#FF6C37" },
    { name: "AWS (Basics)", icon: <FaAws />, color: "#FF9900" },
  ];

  // duplicate for seamless loop
  const skillsLoop = [...skillSet, ...skillSet];

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  // auto pause/resume based on viewport
  useEffect(() => {
    if (isInView) {
      startAnimation();
    } else {
      stopAnimation();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ backgroundColor: theme.background }}
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h2
          style={{ color: theme.textMain }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic"
        >
          Technical <span style={{ color: theme.primary }}>Arsenal.</span>
        </h2>
        <div
          className="h-1.5 w-24 rounded-full mb-14"
          style={{ backgroundColor: theme.primary }}
        />

        {/* 👇 MARQUEE (hover anywhere → pause) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 lg:gap-8 w-max cursor-pointer"
            animate={controls}
            onHoverStart={stopAnimation}
            onHoverEnd={() => {
              if (isInView) startAnimation();
            }}
          >
            {skillsLoop.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: theme.surface + "cc",
                  border: `1px solid ${theme.border}`,
                  backdropFilter: "blur(10px)",
                }}
                className="min-w-[220px] p-10 rounded-[2.5rem] flex flex-col items-center justify-center gap-6"
              >
                <div
                  className="text-6xl"
                  style={{
                    color: isDarkMode ? skill.color : theme.textMain,
                  }}
                >
                  {skill.icon}
                </div>

                <span
                  style={{ color: theme.textMain }}
                  className="text-xs font-black uppercase tracking-[0.2em] text-center opacity-80"
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
