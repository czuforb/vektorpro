// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const ContactFooter = () => {
    return (
        <Grid bg>
            <SectionTitle>
                <h3>Elérhetőség</h3>
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
    grid-column: 1/11;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    display:flex;
    width:100%;
    justify-content:space-around;
    align-items:center;
    color:white;
    flex-direction: column;
    margin-top:2rem;
    margin-bottom:6rem;
    a{
        color:white;
        margin-bottom:2rem;
        font-size:2rem;
    }
`

const Footer = styled.div`
    grid-column: 1/11;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    display:flex;
    width:100%;
    justify-content:flex-start;
    color:white;
    border-top:1px solid white;
    margin-bottom:4rem;
    padding-top:1rem;
    a{
        margin-left:auto;
        color:white;
        font-size:0.75rem;
    }

    h3{
        font-size:0.75rem;
    }
`