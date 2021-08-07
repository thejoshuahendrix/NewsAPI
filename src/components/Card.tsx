import React, { useState } from 'react'
import styled from 'styled-components';




const Container = styled.div<{ active: boolean }>`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 95vh;
width: 95vw;
background-color: #363636;
border-radius: 20px;
font-size:${({ active }) => active ? "1.5rem" : "2rem"};
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

type CardType = {
    heading: string;
    body: string;
    content:string;
};


const Card = (props: CardType) => {
    const [active, setActive] = useState(false);

    return (
        <Container active={active}>
            <div className="heading">{props.heading}</div>
            <div className="content">{props.body}</div>
            <div className="article">{props.content}</div>
            <ToggleButton onClick={()=> {setActive(!active)}} active={active} />
        </Container>

    )
};

export default Card
