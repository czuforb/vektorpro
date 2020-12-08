// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import gsap from 'gsap'
import { Grid } from './StyledElements.js'

// Components & Assets
import image1 from '../img/01.png'
import image2 from '../img/02.png'

const Hero = () => {
    const ref = useRef()
    useEffect(() => {
        gsap.fromTo(ref.current, {
            y: 400,
        }, {
            y: 0,
            stagger: 0.4,
            duration: 1
        })
        console.log(ref)
    }, [])
    return (
        <Grid ref={ref}>
            <Left>
                <h2>Személyre szabott sportolói készségfejlesztés</h2>
                <p>Adott sportági edzésmunkát kiegészítő, azokat erősítő, egyéni igényeknek megfelelő mozgáskoordináció-fejlesztő edzések. A modern sportéletben egyre inkább előtérbe kerülő, igen hatékony edzésforma.</p>
                <button>Érdekel
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </Left>
            <Image1 >
                <img src={image1} alt="vektor pro image 12" />
            </Image1>
            <Image2>
                <img src={image2} alt="vektor pro image 12" />
            </Image2>
            <BgImage>
                <path d="M613.889 183.591C660.718 136.788 660.718 60.9051 613.889 14.1022C567.06 -32.7007 491.134 -32.7007 444.305 14.1022L0 458.157L15.3424 473.49L14.9892 473.843L459.294 917.898C506.123 964.701 582.049 964.701 628.878 917.898C675.707 871.095 675.707 795.212 628.878 748.41L338.815 458.51L613.889 183.591Z" fill="#97CBDC" />

            </BgImage>
        </Grid>
    )
}

const Left = styled.div`
    width:100%;
    height:100%;
    grid-column: 2/ 9;
    grid-row: 1/8;

    padding:1rem;

    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;

    z-index:2;

    color: #002253;


    h2{
        font-size:3rem;
        margin-bottom:1.5rem;
        line-height:118%;
    }
    p{
        font-size:1rem;
        line-height:162%;
        margin-bottom:2rem;
        width:530px;
    }

    button{
        padding:1rem 2rem;
        background-color:transparent;
        border: 1px solid #002253;
        font-size:1rem;
        display:flex;
        align-items:center;
        svg{
            width:1.5rem;
            height:auto;
            margin-left:0.5rem;
            margin-right:0.5rem;
        }
    }
 
`
const Image1 = styled.div`
    width:100%;
    height:100%;
    grid-column:9 / 12;
    grid-row:4/8;
    background-color: lightblue;

    z-index:2;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const Image2 = styled.div`
    width:100%;
    height:100%;
    grid-column: 11 / 15;
    grid-row: 2/7;
    background-color: lightcoral;
    z-index:2;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const BgImage = styled.svg`
position:absolute;
width:100%;
height:100%;
z-index:0;
left:25%;
`


export default Hero