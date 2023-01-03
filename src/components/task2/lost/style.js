import styled from "styled-components";

export const LostContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: calc(100px + ${props => props.height}px);
    background: rgba(103, 128, 159, 0.5);
    z-index: 20;
`

export const LostBox = styled.div`
    position: absolute;
    top: calc(60% - 250px);
    left: calc(50vw - 250px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
    background: white;
    border-radius: 20px;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const Title = styled.h1`
    
`

export const Score = styled.h3`
   
`

export const TextBox = styled.input`
    width: 50%;
    height: 40px;
    border: none;
    border-bottom: solid black 1px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    margin: 40px;

    &:focus-visible {
        outline: none;
        border: none;
        border-bottom: solid skyblue 1px;
    }
`

export const SaveButton = styled.button`

`