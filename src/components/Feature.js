// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from "./StyledElements.js"
// import gsap from 'gsap'

const Feature = () => {
  return (
    <Grid bg>
      <SectionTitle>
        <h3>Mi az a Vektor Pro?</h3>
      </SectionTitle>
      <Text>
        Adott sportági edzésmunkát kiegészítő és az alapvető mozgáskészletet
        szélesítő, egyéni igényeknek megfelelő koordináció-fejlesztő edzések.
        Régi és új eszközök segítségével, modern módszerekkel és komplex
        gyakorlatokkal erősítjük és támasztjuk meg a versenyzéshez szükséges
        sportolói kompetenciákat. A mai sportéletben egyre inkább előtérbe
        kerülő, kiemelkedően hatékony edzésforma.
      </Text>
    </Grid>
  )
}

export default Feature

const Text = styled.p`
  grid-column: 1 / 10;
  @media (min-width: 1080px) {
    grid-column: 2/26;
  }
  color: white;
  font-size: 1rem;
  line-height: 180%;
  margin-top: 1rem;
  margin-bottom: 2em;
`
