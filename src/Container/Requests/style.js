import styled from "styled-components";

export const Body = styled.body`
background-color: black;
background: cover;
height: 100%;
min-height: 100vh;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerItems = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Image = styled.img`
width: 35vw;
height: 35vh;
`

export const Users = styled.div`
    /* display: flex; */
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background:  rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 100px;
    border: none;
    outline: none;
    padding-left: 15px;
    padding-top: 10px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #D1D1D2;
        background: none;
        display: block;
       
    }

    div {
        margin-top: 30px;
    }
    button {   
    cursor: pointer;
    margin-left: 21vw;
    margin-top: -4vw;
    position: absolute;
    background: none;
    border: none;
}
`


export const Btn = styled.button`
width: 342px;
height: 68px;
color: white;
border: none;
background-color: #2D2D32;
margin-top: 85px;
cursor: pointer;
` 

