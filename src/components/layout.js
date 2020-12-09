
/** @jsx jsx */
import styled from "@emotion/styled"
import React from "react"

import { Global, css, jsx } from '@emotion/react';

const Layout = ({ children }) => {

  return (
    <>

      <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      @import 'reset.css';
      
    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased; 
      margin:0;
      padding:0;

    }


    body{
      font-family: 'Alata';
      width:100%;
      height:auto;
    }

    h1{
    }
    h2{
      font-size:2.441rem;
    }
    h3{
      font-size:1.953rem;
    }
    h4{
      font-size:1.563rem;
    }
    p{
      font-family:'Roboto';
      line-height:168%;
    }

    li{
      font-family:'Roboto';
      line-height:158%;

    }
 
  `} />


      {children}


    </>
  )
}




export default Layout
