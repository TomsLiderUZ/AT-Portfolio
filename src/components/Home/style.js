import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100vh;
    background-color: var(--homeWrapperBg);
`;


export const ContentsWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10rem;
    background-color: var(--homeBg);
    backdrop-filter: blur(5px);
`;