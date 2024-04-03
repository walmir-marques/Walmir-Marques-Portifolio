"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="w-full flex gap-4 flex-wrap">
        <Image src="/images/icons/html.svg" height={40} width={40} />
        <Image src="/images/icons/css.svg" height={40} width={40} />
        <Image src="/images/icons/javascript.svg" height={40} width={40} />
        <Image src="/images/icons/typescript.svg" height={40} width={40} />
        <Image src="/images/icons/react.svg" height={40} width={40} />
        <Image src="/images/icons/next.svg" height={40} width={40} />
        <Image src="/images/icons/tailwind.svg" height={40} width={40} />
        <Image src="/images/icons/sass.svg" height={40} width={40} />
        <Image src="/images/icons/git.svg" height={40} width={40} />
        <Image src="/images/icons/github.svg" height={40} width={40} />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacharelado em ciência da computação</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: <ul className="list-disc pl-2"></ul>,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/image2.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Sou formado em ciência da computação desde 2012, e desde a minha
            formação sempre trabalhei na área de infraestrutura. Entre março de
            2021 e Novembro de 2023 fui fazer um intercâmbio na Irlanda para
            aprimorar o meu inglês. Após retornar para o Brasil decidi migrar de
            área e escolhi a área de Front-End para estudar, por ser uma área na
            qual sempre tive vontade de me aprofundar. Atualmente estou focado
            nos meus estudos para futuramente encontrar uma vaga de emprego na
            área.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Tecnologias
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Cursos
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
