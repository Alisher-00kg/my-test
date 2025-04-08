import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../../context/ModalContext";
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return createPortal(
    <StyledBackdrop onClick={onClose}>
      <ContentModalStyled onClick={(event) => event.stopPropagation()}>
        {children}
      </ContentModalStyled>
    </StyledBackdrop>,
    document.getElementById("modal")
  );
};

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentModalStyled = styled.div`
  width: 671px;
  height: fit-content;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 30px 20px;
`;
