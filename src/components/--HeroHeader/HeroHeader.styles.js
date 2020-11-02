import styled from "styled-components";
const defaultCover = require("./../../images/jpg/cover-default.jpg");

const HeroHeader = styled.header`
  background-image: url(${(props) => props.cover || defaultCover});
  background-size: cover;
  height: 480px;
  width: 100%;
  position: relative;
  &::after {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.7) 60%,
      rgba(0, 0, 0, 0.85) 100%
    );
  }
`;

const HeroHeaderContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const Styled = {
  HeroHeader,
  HeroHeaderContent,
};
