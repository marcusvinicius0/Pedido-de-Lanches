import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axios from "axios";

import Burguer from '../../assets/burguer.svg'
import Trashcan from '../../assets/trashcan.svg'

import H1 from '../../Components/Title'

import { Body, Container, ContainerItems, Image, Users, Btn } from './style'

function Requests() {
    const [requests, setRequests] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchRequests() {
            const { data: newRequests } = await axios.get("http://localhost:3001/users")

            setRequests(newRequests)
        }

        fetchRequests()
    }, [])

    async function deleteRequest(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)

        const newRequests = requests.filter(user => user.id !== userId)
        setRequests(newRequests)
    }

    function goBackPage() {
        history.push('/')
    }

    return (
       <Body>
            <Container>
            <Image src={Burguer}></Image>
            <ContainerItems>
                <H1>Pedidos</H1>


                {requests.map(user => (
                    <Users key={user.id}>
                        <p>{user.order}</p>
                       <div>
                       <p>{user.name}</p>
                       </div>
                        <button onClick={() => deleteRequest(user.id)}>
                            <img src={Trashcan} alt="trashcan" /></button>
                    </Users>
                ))}

             
                <Btn isBack={true} onClick={goBackPage}>
                    Voltar
                </Btn>
            </ContainerItems>
        </Container>
       </Body>
    )

}

export default Requests