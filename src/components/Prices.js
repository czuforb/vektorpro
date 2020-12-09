// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const Prices = () => {
    return (
        <Grid bg>
            <SectionTitle>
                <h2>Áraink</h2>
            </SectionTitle>
            <PriceContainer>
                <Package>
                    <h3>Egyéni foglalkozások</h3>
                    <h4>10000 <span>Ft</span></h4>
                    <p>/ alkalom</p>
                </Package>
                <Package>
                    <h3>Páros<br /> Edzések</h3>
                    <h4>16000 <span>Ft</span></h4>
                    <p>/ alkalom</p>
                </Package>
                <Package>
                    <h3>Kiscsoportos edzések*</h3>
                    <h4>10000 <span>Ft</span></h4>
                    <p>/ alkalom</p>
                </Package>
            </PriceContainer>
            <Note>* Maximum 3-4 fő</Note>
        </Grid>
    )
}


export default Prices


const PriceContainer = styled.div`
    grid-column: 3/15;
    display:flex;
    width:100%;
    justify-content:space-around;
    color:white;
`

const Package = styled.div`
    border:1px white solid;
    width:352px;
    height:320px;
    padding:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    h3{
        font-size:1.75rem;
        width:80%;
        text-align: center;
        margin-bottom:3rem;
    }
    h4{
        font-size:2.5rem;
        margin-bottom:1rem;
        span{
            font-size:1rem;
        }
    }


`



const Note = styled.p`
    grid-column: 3/ 15;
    place-self:center;
    color:white;
    opacity:0.5;
    margin-bottom:4rem;
    `