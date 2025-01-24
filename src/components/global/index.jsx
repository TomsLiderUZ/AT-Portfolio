import React from "react";
import { Wrapper, ContentsWrapper } from "./style";
import BgCanvas from "../BgCanvas/canvas";
import Home from "../Home/index";
import About from "../About/index";
import Skills from "../Skills/index";
import Education from "../Education/index";
import Work from "../Work/index";
import Contact from "../Contact/index";

function Index() {
  return (
    <Wrapper>
      <BgCanvas />
      <ContentsWrapper>
        <Home />
        <About />
        <Skills />
        <Education />
        <Work />
        <Contact />
      </ContentsWrapper>
    </Wrapper>
  );
}

export default Index;
