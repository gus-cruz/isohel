import React from 'react';

import logoImg from '../../assets/isohel-logo.svg';

import { Logo, Container, Title, LogoMenu, Header, Sign, Section } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoMenu href="#">
                    <Logo src={logoImg} alt="isohel" />
                    <Title>ISOHEL</Title>
                </LogoMenu>

                <Sign>
                    <a href="#">cadastrar</a>
                    <a href="#">entrar</a>
                </Sign>
            </Header>

            <Section>
                <h1>Encontre a receita perfeita para você</h1>
                <input></input>
                <button>Pesquisar</button>
            </Section>
        </ Container>
    )
}

export default Dashboard;