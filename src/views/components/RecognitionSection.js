import React from "react";
import styled from "styled-components";
import IdcLogo from "../assets/images/idc.png";
import Gartner from "../assets/images/gartner.png";
import ForresterLogo from "../assets/images/forrester.png";

const SectionContainer = styled.section`
  background-color: #1a1c2b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: hsla(0, 0%, 100%, 0.6);
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ContentItem = styled.div`
  text-align: center;
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  padding: 0;

  img {
    max-width: 120px;
    margin-bottom: 1rem;
    align-self: center;
  }

  p {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.5;
    font-size: 1rem;
    margin: 0;
    white-space: nowrap;

    @media (min-width: 769px) {
      min-height: 120px;
    }

    @media (max-width: 768px) {
      width: 80%;
      white-space: normal;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    width: 30px;
    display: block;
  }
`;

const RecognitionSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <ContentItem>
          <img src={IdcLogo} alt="IDC Logo" />
          <p>
            Hexnode is Listed as a<br/>
            Leader in IDC MarketScape<br/> 
            UEM Vendors Assessment
          </p>
        </ContentItem>
        <VerticalLine />
        <ContentItem>
          <img src={Gartner} alt="Gartner Logo" />
          <p>
            Recognized in the 2023<br/>
            Gartner® Market Guide for<br/> 
            Unified Endpoint Management
          </p>
        </ContentItem>
        <VerticalLine />
        <ContentItem>
          <img src={ForresterLogo} alt="Forrester Logo" />
          <p>
            Forrester Includes as a<br/>
            Notable Vendor in The<br/>
            Unified Endpoint Management<br/>
            Landscape, Q3 2023
          </p>
        </ContentItem>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default RecognitionSection;