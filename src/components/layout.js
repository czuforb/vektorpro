
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
      
      :root{
            --blue: hsla(236, 100%, 7%, 1);
            --blue-light: hsla(237, 100%, 96%, 1);
            --purple: hsla(242, 100%, 76%, .25);
            --purple-darker: hsla(242, 100%, 76%, .5);
            --background: hsla(227, 100%, 98%, 1);
            --grey: hsla(278, 5%, 41%, .5);
            --green: hsla(133, 18%, 59%, 1);
      }


    *, *::after, *::before {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin:0;
      padding:0;

    }


    body{
      font-family: 'Alata';
      width:100%;
      height:auto;
      background-color:var(--background);
    }

    h1, h2, h3 {
      text-rendering: optimizeLegibility;
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
      line-height:168%;
    }

    a:active,
    a:visited,
    a:link,
    a:hover{
      text-decoration: none;
    }
    li{
      line-height:158%;
      font-size:1.25rem;
    }
 
  `} />


      {children}


    </>
  )
}




export default Layout
