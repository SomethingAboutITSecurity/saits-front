import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./styles";
import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

const InfoSection = ({
  dark,
  id,
  imgStart,
  topLine,
  headline,
  description,
  src,
  alt,
  buttonText,
  darkText,
  to,
  btnHidden,
  btnLink,
}) => {
      return (
        <InfoContainer dark={dark} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine} </TopLine>
                  <Heading dark={darkText}>{headline}</Heading>
                  <Subtitle dark={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    {id === "about" && (
                      <ArrowDown
                        onClick={() => {
                          const el = document.getElementById("conference");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        aria-label="Przewiń w dół do sekcji konferencji"
                      >
                        <ArrowDownIcon />
                      </ArrowDown>
                    )}
                    {id === "conference" && (
                      <ArrowDown
                        onClick={() => {
                          const el = document.getElementById("projects");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        aria-label="Przewiń w dół do sekcji działalności"
                      >
                        <ArrowDownIcon />
                      </ArrowDown>
                    )}
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={src} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      );
};

// ...existing code...

export default InfoSection;