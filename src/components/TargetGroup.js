// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from "./StyledElements.js"
// import gsap from 'gsap'

const TargetGroup = () => {
  return (
    <Grid>
      <SectionTitle blue>
        <h3>Célcsoport</h3>
      </SectionTitle>
      <List>
        <li>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          Sportoló gyermekek és felnőttek akik szeretnék szélesíteni mozgásbeli
          képességeiket.
        </li>
        <li>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          Sportcsapatok amelyek specializált fejlesztő edzésekkel szeretnék
          kiegészíteni programjukat.
        </li>
        <li>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          A mozgásbeli műveltség iránt érdeklődő, azt fejleszteni kívánó
          felnőttek.
        </li>
      </List>
    </Grid>
  )
}

export default TargetGroup

const List = styled.ul`
    grid-column: 1/ 10;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    width:100%;
    height:auto;
    list-style-type:none;
    margin-bottom:2rem;
        li{
            margin-bottom:1rem;
            color:var(--blue);
            display:flex;
            //justify-content:center;
            align-items:center;
            svg{
                margin-right:.5rem;
                width:1.5rem;
                height:1.5rem;
            }
        }
    }
`
