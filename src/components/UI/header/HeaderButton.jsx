import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../button/Button";
import { Icons } from "../../../assets";
import { ModalContext } from "../../../context/ModalContext";
import { Modal } from "../modal/Modal";
import { ModalCard } from "../modal/ModalCard";
import { MealsContext } from "../../../context/MealsContext";

export const HeaderButton = () => {
  const [bounce, setBounce] = useState("");
  const { open, onOpen, onClose } = useContext(ModalContext);
  const { newMeals, onOrder } = useContext(MealsContext);
  const totalCount = newMeals?.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    setBounce("bounce");

    return () => {
      setTimeout(() => setBounce(""), 300);
    };
  }, [totalCount]);
  return (
    <>
      <StyledButton className={bounce} onClick={onOpen}>
        <StyledPTag>
          <Icons.Basket /> Your cart
        </StyledPTag>
        <Badge>{totalCount}</Badge>
      </StyledButton>
      {open && (
        <Modal>
          <StyledUl>
            {newMeals?.map((item) => (
              <ModalCard key={item.id} {...item} />
            ))}
          </StyledUl>

          <>
            <ContainerofCost>
              <StyledH2>Total Amount</StyledH2>
              <DivCost2>
                <StyledSpanAmount>
                  ${totalCount > 0 ? totalCount : "0.00"}
                </StyledSpanAmount>
                <DivOrderingClosing>
                  <Button variant={"close"} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant={"add"} onClick={onOrder}>
                    Order
                  </Button>
                </DivOrderingClosing>
              </DivCost2>
            </ContainerofCost>
          </>
        </Modal>
      )}
    </>
  );
};
const heartbeat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;
const StyledButton = styled(Button)`
  width: 249px;
  height: 59px;
  border-radius: 30px;
  background-color: #5a1f08;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  &.bounce {
    animation: ${heartbeat} 0.5s ease;
  }
  cursor: pointer;
`;
const Badge = styled.span`
  width: 51px;
  height: 35px;
  border-radius: 30px;
  font-size: 18px;
  background-color: #8a2b06;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
  cursor: pointer;
`;
const StyledPTag = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  cursor: pointer;
`;
const StyledH2 = styled.h2`
  color: rgb(34, 34, 34);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
`;
const StyledSpanAmount = styled.span`
  color: rgb(138, 43, 6);
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0px;
`;

const DivCost2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
`;
const DivOrderingClosing = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-right: -10px;
`;
const ContainerofCost = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  overflow-y: scroll;
`;
