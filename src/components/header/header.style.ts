import styled from "styled-components";

export const HeaderLayout = styled.header`
    background-color: var(--mikado-yellow);
    color: var(--rich-black-frogra-39);
    height: 15vh;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0.5vw;
    grid-template-areas:
        "head head"
        "home pokedex";

    .grid.head {
        grid-area: head;
    }
    .grid.home {
        grid-area: home;
    }
    .grid.pokedex {
        grid-area: pokedex;
    }

    button {
        background-color: var(--princeton-orange);
        border: none;
        display: block;
        width: 100%;
        height: 100%;
    }
`;
