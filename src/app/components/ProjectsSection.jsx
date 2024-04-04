"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Foodie",
    description:
      "Projeto está sendo desenvolvido em Next.js e usando a plataforma clerk como backend. Um website aonde pessoas podem encontrar restaurantes na Irlanda.",
    image: "/images/projects/foodie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/walmir-marques/food-delivery-app",
    previewUrl: "",
  },
  {
    id: 2,
    title: "React Store Clone",
    description:
      "Projeto desenvolvido em react e usado conceitos componentes, hooks, ContextApi, fetch e iteração com Apis.",
    image: "/images/projects/cart.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/walmir-marques/mercadolivre-api-app",
    previewUrl: "https://mercadolivre-api-app.vercel.app/",
  },
  {
    id: 3,
    title: "IMC Calculator",
    description:
      "Nesse projeto foram usados conceitos básicos de react como, components, useState e props.",
    image: "/images/projects/imc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/walmir-marques/imc-calculator-app",
    previewUrl: "https://imc-calculator-app-nine.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Forecast",
    description:
      "Projeto desenvolvido em react. Foram usados conceitos como Componenets, Apis, Fetch, UseState. Esse projeto tem como intuito mostrar a previsão do tempo de acordo com a cidade digitada pelo usuário.",
    image: "/images/projects/weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/walmir-marques/weather-api",
    previewUrl: "https://weather-api-hazel-two.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
