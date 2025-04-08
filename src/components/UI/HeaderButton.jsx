import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

export const HeaderButton = () => {
  return (
    <StyledButton>
      <p>Your cart</p>
      <Badge>0</Badge>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 249px;
  height: 59px;
  border-radius: 30px;
  background-color: #5a1f08;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
`;
const Badge = styled.span`
  width: 51px;
  height: 35px;
  border-radius: 30px;
  background-color: #8a2b06;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
