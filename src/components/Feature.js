// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const Feature = () => {
    return (
        <Grid bg>
            <SectionTitle>
                <h2>Mi az a Vektor Pro?</h2>
            </SectionTitle>
            <Text>Adott sportági edzésmunkát kiegészítő, azokat erősítő, egyéni igényeknek megfelelő mozgáskoordináció-fejlesztő edzések. A modern sportéletben egyre inkább előtérbe kerülő, igen hatékony edzésforma.</Text>
        </Grid>
    )
}


export default Feature



const Text = styled.p`
    grid-column: 3 / 12;
    color:white;
    font-size:1.5rem;
    line-height: 180%;
    margin-top:-2rem;
    margin-bottom:4rem;
`