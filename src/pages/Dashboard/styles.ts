import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  width: 100%;
  max-width: 700px;

  h1 {
    margin-bottom: 24px;
  }

  input {
    background: #232129;
    color: #f4ede8;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 80%;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  button {
    background: #33cc95;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 16px;
    width: 80%;
    margin: 20px;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#33cc95')};
    }
  }

  h2 {
    font-size: 15px;
  }
  h3 {
    font-size: 13px;
  }
  img {
    width: 156px;
    height: 156px;
    margin: 0 auto;
    border-radius: 50%;
  }

  form {
    margin: 80px 0;
    width: 100%;
    text-align: center;
  }
`;
