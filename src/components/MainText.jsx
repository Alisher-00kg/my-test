import React from "react";
import styled from "styled-components";

export const MainText = () => {
  return (
    <StyledBox>
      <h1>Delicious Food, Delivered To You</h1>
      <InnerBox>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </p>
      </InnerBox>
    </StyledBox>
  );
};
const StyledBox = styled.div`
  width: 854px;
  height: 270px;
  border-radius: 16px;
  background-color: #383838;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 25%;
  left: 20%;
  z-index: 5;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
  gap: 20px;
  padding: 40px 120px;
  p {
    text-align: center;
  }
`;
const InnerBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
