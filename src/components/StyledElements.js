import styled from "@emotion/styled"

export const Grid = styled.section`
width:100%;
    position:relative;
    display:grid;
    grid-template-columns: 1fr 160px repeat(12, 64px) 160px 1fr;
    grid-template-rows: ${props => props.rows ? 'repeat(8,64px)' : 'auto'};
    grid-gap:2rem;
    overflow:hidden;
    background-color: ${props => props.bg ? '#002253' : 'none'};
  }
`;



export const SectionTitle = styled.div`
    grid-column: 2 / 15;
    margin-top:4rem;
    margin-bottom:1.5rem;
    h2{
        font-size:2rem;
        color:${props => props.blue ? '#002253' : 'white'};
        display:flex;
        align-items: flex-end;
    }
`

