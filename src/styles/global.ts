import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
  body {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0em;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background-color:#E8EAEE;
    color:#000;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
  }
`;
export const Container = styled.div`
  margin-top: 72px;
  padding-left: calc(50% - 544px);
  padding-right: calc(50% - 544px);
`;
