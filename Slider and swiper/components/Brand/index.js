import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
const Mainbox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  padding-left: 8vh;
  padding-right: 8vh;
  overflow-x: hidden;
`;

const Container = styled.div`
  background-image: url("static/brand_strategy.png");
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  overflow-x: hidden;
`;
const Textcontainer = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Marquee = keyframes`
from {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -moz-transform: translateX(150%);
    -webkit-transform: translateX(150%);
    transform: translateX(150%);
  }
`;
const Swipertext = styled.div`
  text-align: right;
  color: white;
  -moz-transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  animation-name: ${Marquee};
  -moz-animation: ${Marquee} 5s linear infinite;
  -webkit-animation: ${Marquee} 5s linear infinite;
  animation: ${Marquee} 5s linear infinite;
  text-transform: uppercase;
  font-size: 110px;
`;
const RightHead = styled.div`
  font-size: 35pt;
  font-weight: 500;
  color: black;
  padding-bottom: 2rem;
`;
const RightList = styled.div`
  font-size: 14pt;
  font-weight: bold;
  padding: 0.25rem;
`;
const LeftText = styled.p`
  font-weight: 500;
  font-size: 50pt;
  ms-transform: rotate(270deg);

  //   -webkit-transform: rotate(270deg); /* Chrome, Safari, Opera */

  //   transform: rotate(270deg);
  border: 0px solid red;
  writing-mode: vertical-lr;
`;
const LeftBox = styled.div`
  border: 0px solid grey;
  display: flex;
  align-items: flex-end;
  height: 100%;
  justify-content: flex-start;
`;
const RightBox = styled.div`
flex:5,
border:1px solid grey;
display:flex;
align-items:center;
`;
const Title = styled.div`
  padding-right: 30px;
  color: black;
  font-size: 40pt;
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
  -webkit-transform-origin: 0 50%;
  font-weight: 600;

  &::after {
    content: "";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100px;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 6px solid black;
  }
`;
const FlexContainer=styled.div`
display: flex;
flex-direction: row;
border: 0px solid red;
height: 40vh;


`
const Brand = () => {
  return (
    <>
      <Mainbox>
        <Container>
          <Textcontainer>
            <Swipertext>Brand In process.</Swipertext>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
              spaceBetween={5}
              slidesPerView={1}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              mousewheel={true}
              direction="vertical"
              loop
              style={{
                height: "40vh",
                width: "30vw",
                border: "0px solid red",
                position: "absolute",
                backgroundColor: "white",
                color: "black",
                // position: "fixed",
              }}
            >
              <SwiperSlide>
                <FlexContainer
                >
                  <div style={{ flex: 1, border: "0px solid green" }}>
                    <div
                      style={{
                        display: "flex",
                        border: "0px solid grey",
                        height: "100%",

                        paddingTop: "50%",
                        paddingLeft: "50%",
                        justifyContent: "center",
                        border: "0px solid red",
                      }}
                    >
                      <Title>
                        Step<span style={{ paddingRight: "15px" }}></span>1
                      </Title>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 8,
                      border: "0px solid green",
                      paddingLeft: "1rem",
                      paddingTop: "2rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                  </div>
                </FlexContainer>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "0px solid red",
                    height: "40vh",
                  }}
                >
                  <div style={{ flex: 1, border: "0px solid green" }}>
                    <div
                      style={{
                        display: "flex",
                        border: "0px solid grey",
                        height: "100%",

                        paddingTop: "50%",
                        paddingLeft: "50%",
                        justifyContent: "center",
                        border: "0px solid red",
                      }}
                    >
                      <Title>
                        Step<span style={{ paddingRight: "15px" }}></span>2
                      </Title>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 8,
                      border: "0px solid green",
                      paddingLeft: "1rem",
                      paddingTop: "2rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "0px solid red",
                    height: "40vh",
                  }}
                >
                  <div style={{ flex: 1, border: "0px solid green" }}>
                    <div
                      style={{
                        display: "flex",
                        border: "0px solid grey",
                        height: "100%",

                        paddingTop: "50%",
                        paddingLeft: "50%",
                        justifyContent: "center",
                        border: "0px solid red",
                      }}
                    >
                      <Title>
                        Step<span style={{ paddingRight: "15px" }}></span>3
                      </Title>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 8,
                      border: "0px solid green",
                      paddingLeft: "1rem",
                      paddingTop: "2rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
             
              <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "0px solid red",
                    height: "40vh",
                  }}
                >
                  <div style={{ flex: 1, border: "0px solid green" }}>
                    <div
                      style={{
                        display: "flex",
                        border: "0px solid grey",
                        height: "100%",

                        paddingTop: "50%",
                        paddingLeft: "50%",
                        justifyContent: "center",
                        border: "0px solid red",
                      }}
                    >
                      <Title>
                        Step<span style={{ paddingRight: "15px" }}></span>4
                      </Title>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 8,
                      border: "0px solid green",
                      paddingLeft: "1rem",
                      paddingTop: "2rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                  </div>
                </div>
              </SwiperSlide>
              ...
            </Swiper>
          </Textcontainer>
        </Container>
      </Mainbox>

      
    </>
  );
};

export default Brand;
