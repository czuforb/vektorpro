import styled from "@emotion/styled"

export const Grid = styled.section`
    width:100%;
    position:relative;
    display:grid;
    grid-template-columns: 1fr repeat(4, 16px 64px) 1fr;
    @media (min-width: 620px) {
        grid-template-columns: 1fr repeat(4, 24px 64px) 1fr;

      }
    @media (min-width: 820px) {
        grid-template-columns: 1fr repeat(4, 24px 72px) 1fr;

      }
    @media (min-width: 1080px) {
        grid-template-columns: 1fr repeat(12, 16px 64px) 1fr;

      }
    grid-template-rows: ${props => (props.rows ? "repeat(6,52px)" : "auto")};
    background-color: ${props => (props.bg ? "var(--blue)" : "none")};
    padding:1rem;
  }
`

export const SectionTitle = styled.div`
  grid-column: 1 / 10;
  @media (min-width: 1080px) {
    grid-column: 2/26;
  }
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  h3 {
    font-size: 1.953rem;
    color: ${props => (props.blue ? "var(--blue)" : "var(--blue-light)")};
    display: flex;
    align-items: flex-end;
  }
`
