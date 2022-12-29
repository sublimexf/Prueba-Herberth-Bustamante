import styled, { css } from "styled-components";

export const Circle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: black;
`

export const HalfCircle = styled.div`
    display: flex;
    width: 600px;
    height: 300px;
`

export const InnerCircle = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
    width: 200px;
    height: 200px;
    background: black;
    border-radius: 50%;
    z-index: 10;

    color: white;
    font-size: 50px;
    font-weight: bold;
`

export const Button = styled.div`
    width: 50%; 
    border: solid 10px black;
    cursor: pointer;
    background: ${ props => props.background };

    ${ props => props.background === "green" ? css`
        border-top-left-radius: 100%;
    `: props.background === "red" ? css`
        border-top-right-radius: 100%;
    `: props.background === "yellow" ? css`
        border-bottom-left-radius: 100%;`
    : `
        border-bottom-right-radius: 100%; 
    `}

    ${ props => props.isActive ? css`
        filter: brightness(2) blur(6px);
    `: css`
        filter: brightness(0.5);
    ` }
`

export const GreenButton = styled.button`
    width: 200px;
    height: 60px;
    color: white;
    background: green;
    font-size: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 40px;

    &:hover {
        background: #349334;
    }
`

export const AnswerLight = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 115px;
    background: green;

    ${ props => props.isActive ? css`
        filter: blur(10px) brightness(1.5);
    ` : css`
        filter: brightness(0.5);
    ` }

    ;

`
