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
                <h2>Az edzések fő céljai</h2>
            </SectionTitle>
            <GoalsContainer ref={ref}>
                <AnimatedLine>
                    <span></span>
                </AnimatedLine>
                <Goal onMouseEnter={() => goalHover(0)} onMouseLeave={() => goalLeave(0)}>
                    <h3>Hatékonyság</h3>
                    <p>A kreatív koordinációs szint bővítése, sportolói teljesítőképesség növelése</p>
                </Goal>
                <Goal onMouseEnter={() => goalHover(1)} onMouseLeave={() => goalLeave(1)}>
                    <h3>Tudatosság</h3>
                    <p>Sportágspecifikus mozgásminták tanulása és erősítése</p>
                </Goal>
                <Goal onMouseEnter={() => goalHover(2)} onMouseLeave={() => goalLeave(2)}>
                    <h3>Változatosság</h3>
                    <p>Rendkívül sokrétű, összetett feladatokból álló edzések, a belső motiváció kialakítása, örömteli tanulás és munka</p>
                </Goal>
                <Goal onMouseEnter={() => goalHover(3)} onMouseLeave={() => goalLeave(3)}>
                    <h3>Fenntarthatóság</h3>
                    <p>A mozgásbeli hiányosságok, problémák felismerése és fejlesztése</p>
                </Goal>
            </GoalsContainer >
        </Grid >
    )
}

const GoalsContainer = styled.div`
    grid-column: 3 / 14;
    height:384px;
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
        display:block;
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
    justify-content:space-between;
    align-items:center;
    padding:2rem;
    padding-left:6rem;
    width:100%;
    height:96px;
    color:#002253;
    background-color:rgba(151,203,220, 0.5);
    h3{
        font-size:2rem;
    }

    p{
        font-size:1.25rem;
        line-height:150%;
        width:70%;
    }

`



export default Goals



