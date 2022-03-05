import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Logo from '../../assets/logo.png' 

import H1 from '../../Components/Title'
import P from '../../Components/Paragraph'
import Button from '../../Components/Button'



import { Body, Image, MainContainer, Input} from './style'

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputRequest = useRef();
  const inputName = useRef();

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {  
      order: inputRequest.current.value,
      name: inputName.current.value,    
    });  

    setUsers([...users, newUser]); 

    history.push("/pedidos");
  }


  
  return (
   <Body>
      <MainContainer>
    <Image alt="logo" src={Logo} />

    <div>
    <H1>Faça seu pedido!</H1>
    <P>Pedido</P>
    <Input ref={inputRequest} type="text" placeholder="1 Coca-cola, 1 X-Salada"></Input>

    <P>Nome do Cliente</P>
    <Input ref={inputName} type="text" placeholder="Rodolfo"></Input>
    
    <Button onClick={addNewUser}>Novo Pedido</Button>
    </div>
    </MainContainer>
   </Body>


  )


}

export default App;
