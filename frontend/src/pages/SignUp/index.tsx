import React from 'react';
import { FiLock, FiMail, FiLogIn, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { 
    Container, 
    Content,
    Input,
    InputContainer,
    Form,
    Background,
    Return
} from './styles';

import Button from '../../components/Button';

import logoKairos from '../../assets/kairos-logo.png';
import logoImg from '../../assets/isohel-logo.svg';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Background>
                <a href="teste">
                    <img src={logoKairos} alt="Kairos"/>
                </ a>
            </Background>

            <Content>
                <Return>
                    <Link to="/">
                        <FiChevronLeft />
                        <span>voltar</span>
                    </ Link>
                </Return>

                <img src={logoImg} alt="ISOHEL" />
                <h1>ISOHEL</h1>

                <Form>
                    <h2>Faça seu cadastro</h2>

                    <InputContainer>
                        <FiMail size={20} />
                        <Input name="text" placeholder="Nome" />
                    </InputContainer>
                    <InputContainer>
                        <FiMail size={20} />
                        <Input name="text" placeholder="Nome de usário" />
                    </InputContainer>
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
                        <Link to="/signin"><FiLogIn /> <span>já tenho uma conta</span></Link>
                    </div>
                </Form>
            </Content>
        </Container>
    )
}

export default SignIn;