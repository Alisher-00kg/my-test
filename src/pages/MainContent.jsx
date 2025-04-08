import React from "react";
import styled from "styled-components";
import { BannerImg } from "../assets";
import { MainText } from "../components/UI/main/MainText";
import { MainCard } from "../components/UI/main/MainCard";
import { meals } from "../utils/constants/meals";
import { Header } from "../components/UI/header/Header";
import Footer from "../components/Footer";
export const MainContent = () => {
  return (
    <StyledMainContent>
      <Header />
      <MainTagStyled>
        <StyledBanner />
        <MainText />
        <StyledUl>
          {meals?.map((item) => (
            <MainCard key={item.id} {...item} />
          ))}
        </StyledUl>
      </MainTagStyled>
      <Footer />
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
  gap: 120px;
`;
const StyledBanner = styled.div`
  width: 100%;
  height: 432px;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledUl = styled.ul`
  width: fit-content;
  height: 564px;
  border-radius: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
`;
