import React from "react";
import Section from "../Components/Section";
import { SkillsLogo } from "../Constants";
import { motion } from "framer-motion";

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeIn Out",
      },
    },
  };

  const containerVariants = {
    hidden: { opaciy: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <Section id="skills">
      <div className="container !px-0">
        <h2>Skills</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-8"
        >
          {SkillsLogo.map((item) => (
            <motion.div
              variants={cardVariants}
              key={item.id}
              className="w-32 md:w-40 items-center flex flex-col rounded-2xl p-4 shadow-inner shadow-neutral-400"
            >
              {<item.icon fontSize={100} className="text-neutral-200" />}
              <p className="font-bold pt-2 !mb-0">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
