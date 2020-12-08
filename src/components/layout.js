
/** @jsx jsx */
import styled from "@emotion/styled"
import React from "react"

import emotionReset from 'emotion-reset';
import { Global, css, jsx } from '@emotion/react';

const Layout = ({ children }) => {

  return (
    <>
      <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
    ${emotionReset}

    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased; 
    }

    body{
      font-family: 'Alata';
    }
 
  `} />


      {children}


    </>
  )
}




export default Layout
