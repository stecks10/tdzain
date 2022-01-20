import React, { FormEvent, useState } from 'react';
import { Container, Content } from './styles';

import perfilImg from '../../assets/perfil.jpg';
import { FormControlLabel, Switch } from '@material-ui/core';

export function Dashboard() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [check, setCheck] = useState(false);

  function handleCreateForm(e: FormEvent) {
    e.preventDefault();

    console.log({
      email,
      message,
      check,
    }); //mostrando console os campos preenchidos
  }

  return (
    <Container onSubmit={handleCreateForm}>
      <Content>
        <img src={perfilImg} alt="perfil" />

        <form>
          <h1>
            Oi sou o Vitor , tenho 25 anos e pretendo ser o maior Dev de todos!
          </h1>
          <input
            placeholder="E-mail"
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Digite uma mensagem"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <FormControlLabel
            label="Permito utilizar meus dados para contato futuro"
            control={
              <Switch
                checked={check}
                onChange={(e) => {
                  setCheck(e.target.checked);
                }}
                name="novidades"
                color="primary"
              />
            }
          />
          <button type="submit">Entrar em contato</button>

          <h3> Todos os direitos reservados a © Vitor</h3>
        </form>
      </Content>
    </Container>
  );
}
