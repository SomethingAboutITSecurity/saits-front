import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
} from "./styles";
import { ArrowDown } from "../ArrowButtons/ArrowDown";
// ...existing code...
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

const HeroSection = () => {
  // ...existing code...
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          type="video/mp4"
          muted
          autoPlay
          playsInline
          loop
          src="/video/hero-video2.mp4"
        />
      </HeroBg>

      <HeroContent>
        <HeroP>Koło naukowe</HeroP>
        <HeroH1>
          Something about{" "}
                <span>Bezpieczeństwo • Edukacja • IT</span>
        </HeroH1>
        <HeroP>Politechniki Rzeszowskiej</HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            exact="true"
            dark="true"
            big="true"
            fontbig="true"
            hidden="true"
          ></Button> */}
        </HeroBtnWrapper>
          <ArrowDown
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Przewiń w dół do sekcji O nas"
          >
            <ArrowDownIcon />
          </ArrowDown>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
