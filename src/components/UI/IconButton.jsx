import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const IconButton = ({ icon, children, onClick, style, variant, ...rest }) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} variant={variant} {...rest}>
        {null ?? icon}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: #8a2b06;
  color: white;
`;
