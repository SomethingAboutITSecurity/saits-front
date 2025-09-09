import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsLogo,
  ProjectsH2,
  ProjectsP,
} from "./styles";
import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

const projectsData = [
  {
    onClick: () => window.open("https://www.saferinternet.pl/dbi/o-dbi.html"),
    image: "/img/project-safety-day.svg",
    header: "Dzień bezpiecznego Internetu",
    description:
      "Co roku, 9 lutego, organizujemy spotkanie na którym omawiamy najważniejsze kwestie związane z tematem dnia",
  },
  {
    onClick: () =>
      window.open("https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA"),
    image: "/img/project-youtube-channel.svg",
    header: "Kanał YouTube",
    description:
      "Prowadzimy kanał na platformie YouTube, na którym publikujemy nowe materiały związane z bezpieczeństwem w sieci",
  },
  {
    image: "/img/project-security.svg",
    header: "Projekty edukacyjne",
    description:
      "Pomagamy osobom nie związanym w branżą w podnoszeniu kompetencji z szeroko pojętego bezpieczeństwa IT",
  },
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Działalność</ProjectsH1>
      <ProjectsWrapper>
        {projectsData.map((item) => (
            <ProjectsCard
              key={item.header}
              onClick={item.onClick}
              role="button"
              tabIndex="0"
              aria-label={`Przejdź do szczegółów projektu: ${item.header}`}
            >
              <ProjectsLogo src={item.image} alt={item.header} />
              <ProjectsH2>{item.header}</ProjectsH2>
              <ProjectsP>{item.description}</ProjectsP>
            </ProjectsCard>
        ))}
      </ProjectsWrapper>
      <ArrowDown
        onClick={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Przewiń w dół do sekcji kontakt"
      >
        <ArrowDownIcon />
      </ArrowDown>
    </ProjectsContainer>
  );
};

export default Projects;
