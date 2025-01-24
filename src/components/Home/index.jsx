import React from "react";
import { Wrapper, ContentsWrapper } from "./style";

function Index() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <h1 className="query-text">Text</h1>
        <a className="gg query-link" href="/g/home" >Link</a>
        <button className="query-button">Button</button>
        <img className="query-img" src="../favicon.ico" />
        <input className="query-form" type="text" />
        <div className="query-animation">Animation</div>
        <div className="query-menu">Menu</div>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default Index;
