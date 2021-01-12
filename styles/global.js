import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }
 
  html,body{
    min-width:100px !important;
  }
  html, body, #__next{
    width: 100%;
    height: 100%;
  }

  html{
    @media screen and (min-width: 1681px) {
      font-size: 16px;
    }
    @media screen and (max-width: 1680px) and (min-width: 1441px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1440px) and (min-width: 1281px) {
      font-size: 14px;
    }
    @media screen and (max-width: 1280px) and (min-width: 998px) {
      font-size: 12.5px;
    }
    @media screen and (max-width: 997px) {
      font-size: 16px;
    }
  }
`