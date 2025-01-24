import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  width: 7vh;
  height: 45vh;
  position: fixed;
  z-index: 9000;
  right: 0;
  background-color: var(--navBgVanish);
  backdrop-filter: var(--navBlurVanish);
  border: var(--navBrVanish);
  margin-right: 2vh;
  border-radius: 2vh;
  transition: width 0.5s ease;
  overflow: hidden;
`;

export const NavLineLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLineRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


export const NavHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 2.5vh;
`;
export const NavHeaderIcon = styled.button`
  background-color: transparent;
  border: none;
  width: 10%;
  height: 10%;
  font-size: 2.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;



export const NavContent = styled.div`
  width: 100%;
  height: 85%;
  justify-content: right;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: right;
`;
export const NavContMenu = styled(Link)`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  text-decoration: none;
  cursor: pointer;
`;

export const NavContMenuTxt = styled.div`
  width: 65%;
  display: flex;
  align-items: right;
  justify-content: center;
  font-size: 2vh;
  overflow: hidden;
  font-weight: 500;
  font-family: sans-serif;
  transition: width 0.5s ease, opacity 0.5s ease;
`;

export const NavContMenuIcon = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
  transition: width 0.7s ease;
`;
