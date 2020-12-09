// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const TargetGroup = () => {
    return (
        <Grid>
            <SectionTitle blue>
                <h3>Célcsoport</h3>
            </SectionTitle>
            <List>
                <li>Sportoló gyermekek és felnőttek akik szeretnék szélesíteni mozgásbeli képességeiket.</li>
                <li>Sportcsapatok amelyek specializált fejlesztő edzésekkel szeretnék kiegészíteni programjukat.</li>
                <li>A mozgásbeli műveltség iránt érdeklődő, azt fejleszteni kívánó felnőttek.</li>
            </List>
        </Grid>
    )
}


export default TargetGroup



const List = styled.ul`
    grid-column: 1/ 10;
    @media (min-width: 1080px) {
        grid-column:2/26;
      }
    width:100%;
    height:auto;
    list-style-type:none;
    margin-bottom:2rem;

    li{
        margin-bottom:1rem;

    }
`
