import styled from "styled-components";
import { Icons } from "../../../assets";
import Input from "../Input";
import IconButton from "../button/IconButton";
import { useContext, useState } from "react";
import { MealsContext } from "../../../context/MealsContext";

export const MainCard = ({ id, title, structure, price }) => {
  const { onAddMeals } = useContext(MealsContext);
  const [enteredInput, setEnteredInput] = useState(1);
  const handleChange = (e) => {
    setEnteredInput(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMeals({ value: enteredInput, id: id });
    setEnteredInput(1);
  };
  return (
    <StyledLi>
      <FoodContainer>
        <TitleOfFood>{title}</TitleOfFood>
        <Structure>{structure}</Structure>
        <Cost>${price}</Cost>
      </FoodContainer>
      <AmountContainer onSubmit={handleSubmit}>
        <StyledAmount>
          <StyledLabel htmlFor={id}>Amount</StyledLabel>
          <StyledInputNumber
            type="number"
            value={enteredInput}
            min={1}
            max={5}
            onChange={handleChange}
          />
        </StyledAmount>
        <IconButton variant={"add"}>
          <Icons.PlusWhite />
          Add
        </IconButton>
      </AmountContainer>
    </StyledLi>
  );
};
const StyledLi = styled.li`
  width: 1039px;
  height: 148px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(214, 214, 214);
`;
const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;
const TitleOfFood = styled.p`
  color: rgb(34, 34, 34);
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
`;
const Structure = styled.p`
  color: rgb(34, 34, 34);
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
const Cost = styled.p`
  color: rgb(173, 85, 2);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
`;
const AmountContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 12px;
`;
const StyledAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const StyledLabel = styled.label`
  color: rgb(34, 34, 34);
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
`;
const StyledInputNumber = styled(Input)`
  width: 60px;
  height: 32px;
  cursor: pointer;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`;
