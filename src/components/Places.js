// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'
import gsap from "gsap/gsap-core"


import nagykovacsi from "../img/nagykovacsi.webp"
import osteo from "../img/nagykovacsi.webp"
import call from "../img/call.webp"

const Places = () => {

    const ref = useRef()


    const goalHover = (index) => {
        gsap.to(ref.current.children[0].children[0], {
            ease: 'power2.inOut',
            duration: 0.75,
            x: -500 * index
        })
        gsap.to(ref.current.children[1].children[index], {
            ease: 'power2.inOut',
            duration: 0.75,
            backgroundColor: 'transparent'
        })
    }


    const goalLeave = (index) => {
        gsap.to(ref.current.children[1].children[index], {
            ease: 'power2.inOut',
            duration: 0.75,
            backgroundColor: 'grey'
        })
    }



    return (
        <Grid>
            <SectionTitle blue>
                <h3>Edzéseink helyszínei</h3>
            </SectionTitle>
            <LocationContainer ref={ref}>
                <Map>
                    <PlaceImage>
                        <img src={osteo} alt="PhysiOsteo" />
                        <img src={nagykovacsi} alt="Nagykovacsi" />
                        <img src={call} alt="PhysiOsteo" />
                    </PlaceImage>
                </Map>
                <Locations>
                    <Location onTouchEnd={() => goalHover(0)} onMouseEnter={() => goalHover(0)} onMouseLeave={() => goalLeave(0)}>PhysiOsteo <span>Hajnóczy József u. 22</span> <span>1122, Budapest</span></Location>
                    <Location onTouchEnd={() => goalHover(1)} onMouseEnter={() => goalHover(1)} onMouseLeave={() => goalLeave(1)}>GreenPower Gym <span>Teleki-Tisza Kastély</span> <span>2094, Nagykovácsi</span></Location>
                    <Location onTouchEnd={() => goalHover(2)} onMouseEnter={() => goalHover(2)} onMouseLeave={() => goalLeave(2)}>Egyéni egyeztetés alapján</Location>
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
    background-color:lightgrey;
    display:flex;
    flex-direction:column;
    @media (min-width: 800px) {
        flex-direction:row;
      }
    margin-bottom:4rem;
    place-self:center;
`

const Map = styled.div`
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
    padding:1rem;
    font-size:1.5rem;
    span{
        font-size:1rem;
        margin-bottom:0.2rem;
    }
`


