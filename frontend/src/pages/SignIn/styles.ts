import styled from 'styled-components';
import signInBackgroundImg from '../../assets/signin-background.jpg';

import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    background: #F0F0F0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vh;
    max-width: 700px;
    height: 100%;

    h1 {
        color: #ed4a65;
    }
    
    position: relative;
    bottom: 50px;

    a:first {
        position: fixed;
        top: 30px;
    }
`

export const InputContainer = styled.div`
  background: #fafafa;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 14px;
    margin-bottom: 18px;
  }

`

export const Input = styled.input`
    flex: 1;
    background: transparent;
    border: 0;
    color: #232129;
`

export const Form = styled.form`
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 16px;
    }

    h2 {
        font-family: 'Roboto Slab';
        font-weight: 500;
        margin-top: 40px;
        margin-bottom: 20px;
        color: #333333;
    }

    a {
      color: #666360;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.8, '#666360')};
      }
    }

    div:last-child {
        position: fixed;
        bottom: 30px;
        width: 100%;
        text-align: center;
        
        svg {
            margin: 0;
        }

        span {
            position: relative;
            bottom: 3px;
            margin-left: 4px;
        }
    }
`


export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
