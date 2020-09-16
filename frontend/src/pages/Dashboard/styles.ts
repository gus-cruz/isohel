import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1260px;
    
    margin: 0 auto;
    padding: 0 60px;
    align-items: center;
`

export const Header = styled.div`
  margin-top: 40px; 
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const Title = styled.h1`
    font-family: 'Yu Gothic UI';
    font-size: 20px;
    color: #ed4a65;
    padding-left: 5px;
`

export const Logo = styled.img`
    color: black;
    height: 30px;
`

export const LogoMenu = styled.a`
    display: flex;
`

export const Sign = styled.div`
    font-family: 'Roboto Slab', serif;

    a + a {
        margin-left: 35px;
    }

    a {
        font-size: 20px;
        color: #1e1e1e;
    }
`

export const Section = styled.section`
    margin-top: 80px;
    padding: 0 20px;

    h1 {
        font-size: 45px;
        color: #333333;
        max-width: 600px; 
    }

    input {
        margin-top: 40px;
        width: 500px;
        height: 55px;
        border: none;
        border-radius: 3px;
    }

    button {
        border: none;
        background: #ed4a65;
        height: 55px;
        color: #FDFDFD;
        padding: 0 60px; 
        font-weight: bold;
        font-size: 24px;
    }
`