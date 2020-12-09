// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const ContactFooter = () => {
    return (
        <Grid bg>
            <SectionTitle>
                <h2>Elérhetőség</h2>
            </SectionTitle>
            <ContactContainer>
                <a href="mailto:skills@bvektorsport.hu">skills@vektorsport.hu</a>
                <a href="tel:+36307031400062">+36703140062</a>
            </ContactContainer>
            <Footer>
                <h3>Vektor</h3>
                <a href="https://vektorsport.hu">vektorsport.hu</a>
            </Footer>
        </Grid>
    )
}


export default ContactFooter


const ContactContainer = styled.div`
    grid-column: 3/15;
    display:flex;
    width:100%;
    justify-content:space-around;
    align-items:center;
    color:white;
    flex-direction: column;

    a{
        color:white;
        margin-bottom:4rem;
        font-size:4rem;
    }
`

const Footer = styled.div`
    grid-column: 2/16;
    display:flex;
    width:100%;
    justify-content:flex-start;
    color:white;
    border-top:1px solid white;
    margin-bottom:6rem;
    padding-top:2rem;
    a{
        margin-left:auto;
        color:white;
        
    }
`