import styled, { css, keyframes } from "styled-components";
import bg from "../images/gradient5.jpg";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(365deg);
    }
`;

const bgPosition = keyframes`
  0% {background-position: top right}
  100% {background-position: bottom left}
`;

export const Background = styled.div`
  position: absolute;
  width: calc(50% - 6vw);
  right: 6vw;
  z-index: 0;
  display: inline-block;
  /* overflow: hidden; */
  margin-left: 3vw;
  opacity: 0.8;
  @media (max-width: 1200px) {
    width: calc(40% - 6vw);
  }

  @media (max-width: 768px) {
    /* width: calc(100% - 8rem);
    
    right: 0;
    left: 0; */

    width: 30%;
    top: 2rem;
    left: 2rem;
    margin: 0;
  }
  svg {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: visible !important;

    filter: blur(10px);
    z-index: -20;

    path.dark {
      transform: translate(4px, 2px);
      fill: black;
      opacity: 0.2;
    }

    path.light {
      transform: translate(-8px, -3px);
      fill: #6361e8;
      opacity: 1;
    }
  }
`;

export const EmailLink = styled.a`
  display: block;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: #6e7ff3;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 4rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BackgroundInner = styled.div`
  clip-path: url('#logo-clip-path');
  width: 100%;
  height: 100%;
  position: absolute;
  &:after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        /* background-color: #FF3CAC;
        background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%); */
        background-size: 200%;
        background-color: white;
        
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        background-image: linear-gradient( 109.6deg,  rgba(123,90,224,1) 11.2%, rgba(164,46,253,1) 32.6%, rgba(213,56,234,1) 62.7%, rgba(251,138,52,1) 100.2% );
        background-image: linear-gradient( 110.7deg,  rgba(255,81,47,1) 1.7%, rgba(255,167,47,1) 8.2%, rgba(218,253,1,1) 16.2%, rgba(98,234,20,1) 23.4%, rgba(69,193,42,1) 32.8%, rgba(7,249,149,1) 43.7%, rgba(6,200,217,1) 55.3%, rgba(18,51,233,1) 65.5%, rgba(122,59,202,1) 74.5%, rgba(231,7,249,1) 82.3%, rgba(202,59,163,1) 91.4% );
        background-image: radial-gradient( circle 1003px at -1.3% -2%,  rgba(40,213,250,1) 0%, rgba(97,143,236,1) 22.1%, rgba(234,122,243,1) 53.2%, rgba(252,83,93,1) 72.2%, rgba(254,129,82,1) 90% );
        
        background-image: url("${bg}");
        

        animation: ${bgPosition} 20s ease-in-out infinite alternate;
        /* transform-origin: center center; */
        /* filter: blur(5px); */
    }
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  padding-top: 5rem;
  position: relative;
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${props =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
  ${props =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
    

    ${props =>
      props.row &&
      css`
        flex-direction: row;
      `}

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {

    padding-top: 0;
  }
`;

export const SectionPanel = styled.div`
  padding: 3rem;
  flex: 1 1 0;
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}

    ${props =>
      props.center &&
      css`
        justify-content: center;
      `}

  ${props =>
    props.alignStart &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.alignEnd &&
    css`
      align-items: flex-end;
    `}

  ${props =>
    props.narrow &&
    css`
      /* flex-basis: 0.5; */
    `}
`;

export const Heading1 = styled.h1`
  font-size: 2.5rem;

  margin-top: 0;
  div {
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 413px) {
    font-size: 2rem;
  }
`;

export const Heading2 = styled.h2`
  margin: 0;
  position: absolute;
  font-size: 4rem;
  white-space: nowrap;
  display: inline-block;
  z-index: 0;
  color: black;
  z-index: 2;
  top: 0;
  left: 3rem;

  
  &:after {
    content: "${props => props.text}";
    text-transform: uppercase;
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
    display: block;
    font-size: 12rem;
    line-height: 0;
    color: blue;
    top: 5px;
    left: 5px;
    color: white;
    color: #f4f4f4;
    text-shadow: 10px 10px 20px rgba(0,0,0,.05);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    position: relative;
    left: auto;
    margin-bottom: 2rem;
    &:after {
      font-size: 7rem;
    }
  }
`;

export const Heading3 = styled.h2`
  font-size: 1.2rem;
  /* text-transform: uppercase; */

  text-align: center;
  margin: 2rem 0;
`;

export const SectionText = styled.div`
  font-size: 1rem;
  max-width: 550px;
  position: relative;

  margin: 1rem auto 0;
  z-index: 1;
`;

export const PeopleContainer = styled.div`
  padding: 2rem 0;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  color: #555;
  line-height: 1.8;
  ${props =>
    props.centerText &&
    css`
      text-align: center;
    `}
`;

export const Button = styled.a`
  font-size: 0.8rem;
  font-family: sans-serif;

  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.8rem 2rem;
  border: none;
  background-color: light-gray;
  font-weight: bold;

  border-radius: 50px;
  margin-top: 2rem;
  background: transparent;

  font-family: sans-serif;
  border: 2px solid white;
  color: white;

  &:active,
  &:focus {
    outline: none;
  }
`;

export const Main = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  background-image: url("${bg}");
  background-image: linear-gradient(to right, #37ecba 0%, #72afd3 100%);
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  background-image: linear-gradient(to left, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
  background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
  background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
  right: 0;
  ${SectionText} {
    padding-top: 0;
    margin: 0 !important;
    max-width: 500px;
    width: auto;
  }

  ${SectionContent} {
    /* width: 50%;
    max-width: auto;
    position: absolute;
    top: 0;
    left: 0; */
    padding: 0;
  }
  ${Paragraph} {
    color: white;
  }

  ${SectionText} {
    /* color: white; */
  }
`;

export const Section = styled.section`
  padding: 8rem 0;
  
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  background-color: #58635d;

  color: white;
  color: black;
  background-color: #e0dcdc;
  background-color: white;
  background-color: #f2f2f2;
  overflow: hidden;
  

  ${SectionText} {
    margin: 0 auto;
  }

  ${props =>
    props.first &&
    css`
      padding-top: 10rem;
      margin-top: 100vh !important;
      box-shadow: 0 0 200px #3e4e82;
    `}



  ${props =>
    props.type === "contact" &&
    css`
      text-align: center;
      background-color: #22243c;
      background-image: linear-gradient(-225deg, #22243c 0%, #3d4e81 100%);
      color: rgba(255, 255, 255, 0.8);
      padding-top: 8rem !important;
      padding-bottom: 12rem !important;
      ${Heading3} {
        font-weight: normal;
        margin-top: 0;
      }
      ${Heading2} {
        position: static;
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.8);
      }
      @media (max-width: 768px) {
        ${Heading2} {
          font-size: 1.6rem;
        }
      }
    `}

  ${SectionText} {
    padding: 2rem 0 1.5rem;
    &:after,
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: #f2f2f2;
      z-index: -1;
      top: 2rem;
      left: 2rem;
      border-bottom-right-radius: 17px;
      /* opacity: 0.3; */
      
    }

    &:before {
      top: 2.3rem;
      left: 2.3rem;
      border-bottom-right-radius: 20px;
      background-image: linear-gradient(
        -225deg,
        #3d4e81 0%,
        #5753c9 48%,
        #6e7ff3 100%
        );
        z-index: -2;
    }
  }

  .cards {
    display: flex;
    justify-content: center;
    align-items: stretch;
    position: relative;
    .card {
      padding: 5rem 2rem;
      margin: 1rem;
      width: 14rem;
      border-radius: 20px;
      background: #ffffff;
      background: #f4f4f4;
      box-shadow:  20px 20px 40px #cfcfcf;
      z-index: 3;
      overflow: hidden;
      position: relative;
      transition: all .2s ease-in-out;
      h3 {
        font-size: 1rem;
        margin: 0 0 1rem;
      }
      ${Paragraph} {
        font-size: .9rem;
        opacity: .9;
        line-height: 1.6;
      }
      &:after{
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: .5rem;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
          -225deg,
          #3d4e81 0%,
          #5753c9 48%,
          #6e7ff3 100%
          );
        background-size: 150%;
        background-position: left;
        transition: all .5s ease-in-out;

      }

      &:hover {
        &:after {
          background-position: right;
        }
      }

    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      .card {
        width: calc(100% - 2rem); 
        margin: .5rem;
        box-shadow:  7px 7px 14px #cfcfcf;
        padding-left: 2.5rem;
        &:after { 
          width: .5rem;
          height: 100%;
          top: 0;
          left: 0;
          background-position: bottom;
        }
      }
    }

  }

  @media (max-width: 768px) {
    padding: 5rem 0;
    ${SectionText} {
      &:after {
        top: 1.3rem;
        left: 1.3rem;
        border-bottom-right-radius: 17px;
      }
      
      &:before {
        top: 1.5rem;
        left: 1.5rem;
        
      }   
    }
  }
`;
