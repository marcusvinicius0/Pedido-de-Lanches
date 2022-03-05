import styled from "styled-components";

export const Image = styled.img`
width: 30vw;
height: 30vh;
margin-top: 1vw;
`

export const Body = styled.body`
background-color: black;
height: 100vh;
`

export const MainContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;

`

export const Input = styled.input `
    background:  rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 50px;
    margin-bottom: 34px;
    border: none;
    outline: none;
    padding-left: 30px;
    display: block;
    color: white;
`;

export const Button = styled.button`
width: 342px;
height: 68px;
background: #D93856;
color: #FFFFFF;
cursor: pointer;
font-size: 17px;
margin-bottom: 10px;

`