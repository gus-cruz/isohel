import React from 'react';
import { FiLock, FiMail, FiLogIn, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { 
    Container, 
    Content,
    Input,
    InputContainer,
    Form,
    Background
} from './styles';

import Button from '../../components/Button';

import logoImg from '../../assets/isohel-logo.svg';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <Link to="/">
                    <FiChevronLeft />
                    <span>voltar</span>
                </ Link>

                <img src={logoImg} alt="ISOHEL" />
                <h1>ISOHEL</h1>

                <Form>
                    <h2>Faça seu logon</h2>

                    <InputContainer>
                        <FiMail size={20} />
                        <Input name="email" placeholder="E-mail" />
                    </InputContainer>
                    <InputContainer>
                        <FiLock size={20} />
                        <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        />
                    </InputContainer>

                    <Button type="submit">ENTRAR</Button>

                    <div>
                        <Link to="/forgot-password"><FiLogIn /> <span>criar conta</span></Link>
                    </div>
                </Form>
            </Content>

            <Background />
        </Container>
    )
}

export default SignIn;