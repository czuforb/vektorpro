// Dependencies
import React, { useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from "./StyledElements.js"
import gsap from "gsap/gsap-core"
// import gsap from 'gsap'

const Goals = () => {
  const ref = useRef()

  const goalHover = index => {
    gsap.to(ref.current.children[0].children[0], {
      ease: "power1.inOut",
      duration: 0.5,
      y: 96 * index,
    })

    gsap.to(ref.current.children[index + 1], {
      duration: 0.5,
      ease: "power1.inOut",
      opacity: 1,
    })
  }

  const goalLeave = index => {
    gsap.to(ref.current.children[index + 1], {
      duration: 0.5,
      ease: "power1.inOut",
      opacity: 0.5,
    })
  }

  return (
    <Grid>
      <SectionTitle blue>
        <h3>Az edzések fő céljai</h3>
      </SectionTitle>
      <GoalsContainer ref={ref}>
        <AnimatedLine>
          <span></span>
        </AnimatedLine>
        <Goal
          onMouseEnter={() => goalHover(0)}
          onMouseLeave={() => goalLeave(0)}
        >
          <h4>Hatékonyság</h4>
          <div>
            <p>
              A kreatív koordinációs szint bővítése, sportolói teljesítőképesség
              növelése
            </p>
          </div>
        </Goal>
        <Goal
          onMouseEnter={() => goalHover(1)}
          onMouseLeave={() => goalLeave(1)}
        >
          <h4>Tudatosság</h4>
          <div>
            <p>Sportágspecifikus mozgásminták tanulása és erősítése</p>
          </div>
        </Goal>
        <Goal
          onMouseEnter={() => goalHover(2)}
          onMouseLeave={() => goalLeave(2)}
        >
          <h4>Változatosság</h4>
          <div>
            <p>
              Rendkívül sokrétű, összetett feladatokból álló edzések, a belső
              motiváció kialakítása, örömteli tanulás és munka
            </p>
          </div>
        </Goal>
        <Goal
          onMouseEnter={() => goalHover(3)}
          onMouseLeave={() => goalLeave(3)}
        >
          <h4>Fenntarthatóság</h4>
          <div>
            <p>
              A mozgásbeli hiányosságok, problémák felismerése és fejlesztése
            </p>
          </div>
        </Goal>
      </GoalsContainer>
    </Grid>
  )
}

const GoalsContainer = styled.div`
  grid-column: 1/10;
  @media (min-width: 1080px) {
    grid-column: 2/26;
  }
  height: auoo;
  position: relative;
  margin-bottom: 4rem;
`

const AnimatedLine = styled.div`
  width: 0.25rem;
  height: 100%;
  background-color: var(--grey);
  position: absolute;
  left: 0;
  z-index: 2;
  span {
    display: none;
    @media (min-width: 1080px) {
      display: block;
    }
    width: 100%;
    height: 96px;
    position: absolute;
    top: 0;
    background-color: var(--blue);
    z-index: 3;
  }
`

const Goal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 200px;
  @media (min-width: 1080px) {
    flex-direction: row;
  }
  width: 100%;
  height: 160px;
  @media (min-width: 1080px) {
    height: 96px;
    width: 100%;
  }
  color: #002253;
  padding: 1.5rem;
  background-color: var(--purple);
  div {
    height: 100%;
    width: 100%;

    font-size: 0.9rem;
    display: flex;
    justify-content: flex-start;
  }
  h4 {
    width: 40%;
    height: 100%;
    font-size: 2rem;
  }
  p {
    width: 100%;
    height: auto;
  }
`

export default Goals
