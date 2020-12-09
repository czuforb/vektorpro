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
            backgroundColor: 'red'
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
                <h2>Edzéseink helyszínei</h2>
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
                    <Location onMouseEnter={() => goalHover(0)} onMouseLeave={() => goalLeave(0)}>PhysiOsteo <span>Hajnóczy József u. 22</span> <span>1122, Budapest</span></Location>
                    <Location onMouseEnter={() => goalHover(1)} onMouseLeave={() => goalLeave(1)}>GreenPower Gym <span>Teleki-Tisza Kastély</span> <span>2094, Nagykovácsi</span></Location>
                    <Location onMouseEnter={() => goalHover(2)} onMouseLeave={() => goalLeave(2)}>Egyéni egyeztetés alapján</Location>
                </Locations>
            </LocationContainer>
        </Grid>
    )
}


export default Places

const LocationContainer = styled.div`
    position:relative;
    grid-column: 3/15;
    background-color:grey;
    display:flex;
    margin-bottom:4rem;
    place-self:center;
`
const AnimatedLine = styled.div`
    width:0.25rem;
    height:100%;
    background-color:rgba(0,34,83, 0.25);
    position:absolute;
    right:0;
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
const Map = styled.div`
    width:500px;
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
    width:500px;
    list-style-type: none;
    
`
const Location = styled.li`
    height:128px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    padding:2rem;
`


