// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const Prices = () => {
    return (
        <Grid bg>
            <SectionTitle>
                <h3>Áraink</h3>
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
    grid-column: 1 / 11;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    display:flex;
    @media (min-width: 800px) {
        flex-direction:row;
      }
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
    color:white;
`

const Package = styled.div`
    border:1px white solid;

    width:100%;
    height:320px;
    padding:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    &:nth-child(2){
    margin-top:2rem;
    margin-bottom:2rem;   
    }
    &:nth-child(2){
    margin-left:2rem;
    margin-right:2rem;   
    }
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
    grid-column: 1/12;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    place-self:center;
    color:white;
    opacity:0.5;
    margin-top:1rem;
    margin-bottom:4rem;
    `