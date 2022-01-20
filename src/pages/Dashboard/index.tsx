import React from 'react';
import { Container, Content } from './styles';
/* import { MdOutlineEmail } from 'react-icons/md'; */
/* import Checkbox from '@material-ui/core/Checkbox'; */

import perfilImg from '../../assets/perfil.jpg';

const Dashboard: React.FC = () => (
  <Container>
    <Content>
      <img src={perfilImg} alt="perfil" />

      <form>
        <h1>
          Oi sou o Vitor , tenho 25 anos e pretendo ser o maior Dev de todos!
        </h1>
        <input placeholder="E-mail" />
        <input placeholder="Digite uma mensagem" />
        <h2>Permito utilizar meus dados para contato futuro</h2>
        <button type="submit">Entrar em contato</button>

        <h3> Todos os direitos reservados a © Vitor</h3>
      </form>
    </Content>
  </Container>
);

export default Dashboard;
