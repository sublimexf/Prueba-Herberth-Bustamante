import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    margin-bottom: 100px;
`

export const Th = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
`

export const Tr = styled.tr`
    &:nth-child(even){
        background-color: #f2f2f2;
    }

    &:hover {
        background-color: #ddd;
    }
`