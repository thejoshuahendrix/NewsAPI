import React, { useState } from 'react'
import styled from 'styled-components';




const Container = styled.div<{ active: boolean }>`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
height: 95vh;
width: 95vw;
background-color: #363636;
border-radius: 50px;
font-size: 1rem;
margin-top: 20vh;
box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
`;




const ToggleButton = styled.div<{ active: boolean }>`
    background-color: ${({ active }) => active ? 'gray ' : 'lime'};
    width: 100px;
    height: 20px;
    position: relative;
    border-radius: 20px;
    border: 1px solid black;
    &:after {
        content:'';
        position: absolute;
        top:0;
        ${({active}) => active ? 'left:0px;' : 'left: calc(100% - 20px);'};
        height:20px;
        width:20px;
        border-radius: 50%;
        border: 1px solid black;
        background-color:${({ active }) => active ? 'gray ' : 'lime'};
        transition: 500ms left;
    }

`

const Heading = styled.div`
    font-family: monospace;
    font-size:1rem;

`

const Content = styled.div<{active : boolean}>`
    padding: 2rem;
    width: 80%;
    background-color:#CCC;
    color: #252525;
    margin:auto;
    opacity: ${({ active }) => active ? '0.0 ' : '1.0'};
`

const Article = styled.div<{active : boolean}>`
    padding: 2rem;
    background-color:#222;
    width: 60%;
    margin:auto;
    opacity: ${({ active }) => active ? '0.0'  : '1.0'};
`

type CardType = {
    heading: string;
    body: string;
    content:string;
};


const Card = (props: CardType) => {
    const [active, setActive] = useState(true);

    return (
        <Container active={active}>
            
            <Content>{props.body}</Content>
            <Article>{props.content}</Article>
            <div></div>
            <Heading>{props.heading}</Heading>
            <div></div>
            <div></div><div></div>
            <div></div>
            <ToggleButton onClick={()=> {setActive(!active)}} active={active} />
        </Container>

    )
};

export default Card
