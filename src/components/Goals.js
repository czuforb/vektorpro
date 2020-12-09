// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
import gsap from "gsap/gsap-core"
// import gsap from 'gsap'



const Goals = () => {

    const ref = useRef()


    const goalHover = (index) => {
        gsap.to(ref.current.children[0].children[0], {
            ease: 'power1.inOut',
            duration: 0.5,
            y: 96 * index
        })

        gsap.to(ref.current.children[index + 1], {
            duration: 0.5,
            ease: 'power1.inOut',
            opacity: 1
        })
    }


    const goalLeave = (index) => {
        gsap.to(ref.current.children[index + 1], {
            duration: 0.5,
            ease: 'power1.inOut',
            opacity: 0.5
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
                <Goal onMouseEnter={() => goalHover(0)} onMouseLeave={() => goalLeave(0)}>
                    <h4>Hatékonyság</h4>
                    <div>
                        <p>A kreatív koordinációs szint bővítése, sportolói teljesítőképesség növelése</p>
                    </div>
                </Goal>
                <Goal onMouseEnter={() => goalHover(1)} onMouseLeave={() => goalLeave(1)}>
                    <h4>Tudatosság</h4>
                    <div>

                        <p>Sportágspecifikus mozgásminták tanulása és erősítése</p>
                    </div>
                </Goal>
                <Goal onMouseEnter={() => goalHover(2)} onMouseLeave={() => goalLeave(2)}>
                    <h4>Változatosság</h4>
                    <div>
                        <p>Rendkívül sokrétű, összetett feladatokból álló edzések, a belső motiváció kialakítása, örömteli tanulás és munka</p>

                    </div>
                </Goal>
                <Goal onMouseEnter={() => goalHover(3)} onMouseLeave={() => goalLeave(3)}>
                    <h4>Fenntarthatóság</h4>
                    <div>

                        <p>A mozgásbeli hiányosságok, problémák felismerése és fejlesztése</p>
                    </div>
                </Goal>
            </GoalsContainer >
        </Grid >
    )
}

const GoalsContainer = styled.div`
    grid-column: 1/10;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    height:auoo;
    position:relative;
    margin-bottom:4rem;
`

const AnimatedLine = styled.div`
    width:0.25rem;
    height:100%;
    background-color:rgba(0,34,83, 0.25);
    position:absolute;
    left:0;
    z-index:2;
    span{
        display:none;
        @media (min-width: 1080px) {
        display:block;
      }
        width:100%;
        height:96px;
        position:absolute;
        top:0;
        background-color:#002253;
        z-index:3;
    }
`

const Goal = styled.div`
    display:flex;
    @media (min-width: 1080px) {
        flex-direction:row;
      }
    flex-direction:column;
    justify-content:space-between;
    align-items:start;
    padding:2rem;
    width:100%;
    height:auto;
    color:#002253;
    background-color:rgba(151,203,220, 0.5);
    h4{
        margin-bottom:1rem;
    }
    div{
        height:100%;
    }
    p{
        width:100%;
    }

`



export default Goals



