// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'
import gsap from "gsap/gsap-core"


import nagykovacsi from "../img/nagykovacsi.webp"
import osteo from "../img/nagykovacsi.webp"
import call from "../img/screen-0.jpg"

const Places = () => {

    const ref = useRef()


    const goalHover = (index) => {
        gsap.to(ref.current.children[0].children[0], {
            ease: 'power2.inOut',
            duration: 0.5,
            x: -100 * index + '%'
        })
        gsap.to(ref.current.children[1].children[index], {
            duration: 0.5,
            ease: 'power1.inOut',
            opacity: 1
        })
    }


    const goalLeave = (index) => {
        gsap.to(ref.current.children[1].children[index], {
            duration: 0.5,
            ease: 'power1.inOut',
            opacity: 0.5
        })
    }



    return (
        <Grid>
            <SectionTitle blue>
                <h3>Edzéseink helyszínei</h3>
            </SectionTitle>
            <LocationContainer ref={ref}>
                <ImageContainer>
                    <PlaceImage>
                        <img src={osteo} alt="PhysiOsteo" />
                        <img src={nagykovacsi} alt="Nagykovacsi" />
                        <img src={call} alt="PhysiOsteo" />
                    </PlaceImage>
                </ImageContainer>
                <Locations>
                    <Location onTouchEnd={() => goalHover(0)} onMouseEnter={() => goalHover(0)} onMouseLeave={() => goalLeave(0)}><h4>PhysiOsteo</h4> <span>Hajnóczy József u. 22</span> <span>1122, Budapest</span></Location>
                    <Location onTouchEnd={() => goalHover(1)} onMouseEnter={() => goalHover(1)} onMouseLeave={() => goalLeave(1)}><h4>GreenPower Gym</h4> <span>Teleki-Tisza Kastély</span> <span>2094, Nagykovácsi</span></Location>
                    <Location onTouchEnd={() => goalHover(2)} onMouseEnter={() => goalHover(2)} onMouseLeave={() => goalLeave(2)}><h4>Egyéni egyeztetés alapján</h4></Location>
                </Locations>
            </LocationContainer>
        </Grid>
    )
}


export default Places

const LocationContainer = styled.div`
    position:relative;
    grid-column: 1/11;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    display:flex;
    flex-direction:column;
    @media (min-width: 800px) {
        flex-direction:row;
      }
    margin-bottom:4rem;
    place-self:center;
`

const ImageContainer = styled.div`
    width:100%;
    height: 384px;
    overflow:hidden;
`
const PlaceImage = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:no-wrap;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const Locations = styled.ul`
    width:100%;
    list-style-type: none;
    
`
const Location = styled.li`
    height:128px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    padding:2rem;
    font-size:1.5rem;
    background-color:var(--purple);
    span{
        font-size:1rem;
        font-family:'Roboto';
        margin-bottom:-0.5rem;
    }
`


