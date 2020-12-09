// Dependencies
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { SectionTitle, Grid } from './StyledElements.js'
// import gsap from 'gsap'


const TargetGroup = () => {
    return (
        <Grid>
            <SectionTitle blue>
                <h2>Célcsoport</h2>
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
    grid-column: 3/ 14;
    width:100%;
    height:auto;
    list-style-type:none;
    margin-bottom:4rem;

    li{
        margin-bottom:1.5rem;
        font-size:1.5rem;
    }
`
