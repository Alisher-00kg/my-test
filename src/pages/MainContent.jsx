import React from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { BannerImg } from "../assets";
import { MainText } from "../components/MainText";
import { MainCard } from "../components/UI/MainCard";
import { meals } from "../utils/constants/meals";
export const MainContent = () => {
  return (
    <StyledMainContent>
      <Header />
      <MainTagStyled>
        <StyledBanner />
        <MainText />
        <ul>
          {meals?.map((item) => (
            <MainCard key={item.id} {...item} />
          ))}
        </ul>
      </MainTagStyled>
    </StyledMainContent>
  );
};
const StyledMainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;
const MainTagStyled = styled.main`
  width: 100%;
  height: 100%;
  background-color: rgb(63, 63, 63);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  gap: 220px;
`;
const StyledBanner = styled.div`
  width: 100%;
  height: 432px;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
