import React from "react";
import { HeaderButton } from "./HeaderButton";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>ReactMeals</h1>
      <HeaderButton />
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 120px;
`;
