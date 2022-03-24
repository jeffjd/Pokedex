import styled from "styled-components";

export const MainLayout = styled.main`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 3;
    grid-template-areas:
        "header"
        "content"
        "footer";

    .header {
        grid-area: header;
    }
    .content {
        grid-area: content;
    }

    .footer {
        grid-area: footer;
    }
`;

export const SectionLayout = styled.section`
    margin: 0px;
    background-color: var(--mikado-yellow);
    padding-left: 0.5vw;
    padding-right: 0.5vw;
`;
