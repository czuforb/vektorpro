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
        gsap.set(ref.current, {
            overflow: 'hidden'
        })
        const tl = gsap.timeline()
        gsap.to([ref.current.children[1].children[0], ref.current.children[2].children[0]], {
            duration: 1.75,
            ease: 'power2.in',
            x: '0',

        })
        gsap.to([ref.current.children[1].children[1], ref.current.children[2].children[1]], {
            duration: 1.75,
            delay: 0.1,
            ease: 'power2.in',
            x: '0',

        })

        /*
        gsap.fromTo([ref.current.children[1], ref.current.children[2]], {
            y: 400,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.4,
            duration: 1
        })
        */
        console.log(ref)
        gsap.set([ref.current.children[1].children[0], ref.current.children[2].children[0]], {
            x: '-100%',
        })
        gsap.set([ref.current.children[1].children[1], ref.current.children[2].children[1]], {
            x: '-120%',
        })
    }, [])


    return (
        <Grid ref={ref} rows>
            <Left>
                <h2>Személyre szabott sportolói készségfejlesztés</h2>
                <p>Adott sportági edzésmunkát kiegészítő, azokat erősítő, egyéni igényeknek megfelelő mozgáskoordináció-fejlesztő edzések. A modern sportéletben egyre inkább előtérbe kerülő, igen hatékony edzésforma.</p>
            </Left>
            <Image1 >
                <div></div>
                <img src={image1} alt="vektor pro image 12" />
            </Image1>
            <Image2>
                <div></div>
                <img src={image2} alt="vektor pro image 12" />
            </Image2>
            <BgImage>
                <path d="M613.889 204.591C660.718 157.788 660.718 81.9051 613.889 35.1022C567.06 -11.7007 491.134 -11.7007 444.305 35.1022L0 479.157L15.3424 494.49L14.9892 494.843L459.294 938.898C506.123 985.701 582.049 985.701 628.878 938.898C675.707 892.095 675.707 816.212 628.878 769.41L338.815 479.51L613.889 204.591Z" />
            </BgImage>
        </Grid>
    )
}

const Left = styled.div`
    grid-column: 1/ 10;
    @media (min-width: 1080px) {
        grid-column: 2/ 13;
        grid-row:1/8;
      }
    padding:1rem;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    z-index:3;
    color: var(--blue);
    h2{
        margin-bottom:1.5rem;
        width:100%;
        line-height:118%;
    }
    p{
        font-size:1rem;
        line-height:162%;
        margin-bottom:2rem;
        width:100%;
    }

    button{
        padding:1rem 2rem;
        background-color:transparent;
        border: 1px solid #002253;
        font-size:1rem;
        display:flex;
        align-items:center;
        margin-bottom:2rem;
        svg{
            width:1.5rem;
            height:auto;
            margin-left:0.5rem;
            margin-right:0.5rem;
        }
    }
 
`
const Image1 = styled.div`
    position:relative;
    overflow:hidden;
    width:100%;
    height:100%;
    grid-column:3/8;
    @media (min-width: 1080px) {
        grid-column:13/19;
        grid-row:3/8;
      }
    // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index:1;
    div{
        width:100%;
        height:100%;
        background-color:var(--green);
        position:absolute;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        position:absolute;
    }
`
const Image2 = styled.div`
    position:relative;
    overflow:hidden;
    width:100%;
    height:100%;
    grid-column: 5/10;
    @media (min-width: 1080px) {
        grid-column:18/26;
        grid-row:2/8;

      }
    margin-top:-2rem;
    z-index:2;
    //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    div{
        width:100%;
        height:100%;
        background-color:var(--blue);
        position:absolute;
    }
    img{
        position:absolute;
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const BgImage = styled.svg`
    display:hidden;
    position:absolute;
    width:100%;
    height:100%;
    z-index:0;
    left:25%;
    fill: var(--purple);
`


export default Hero
