import React from 'react';

import logoImg from '../../assets/isohel-logo.svg';

import { Logo, Container, Title } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Logo src={logoImg} alt="isohel" />
            <Title>ISOHEL</Title>
        </ Container>
    )
}

export default Dashboard;