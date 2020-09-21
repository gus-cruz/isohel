import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/isohel-logo.svg';

import { 
    Logo, 
    Container, 
    Title, 
    LogoMenu, 
    Header, 
    Sign, 
    Section,
    Form,
    Recipes
} from './styles';

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
                <Form>
                <h1>Encontre a receita perfeita para você</h1>
                <div>
                    <input placeholder="Informe o nome da receita"></input>
                    <button type="submit">Pesquisar</button>
                </div>
                </Form>

                <Recipes>
                    <a href="teste">
                        <img
                            src="https://img.itdg.com.br/tdg/images/recipes/000/139/574/300138/300138_original.jpg?mode=crop&width=360&height=200"
                            alt="Num sei"
                        />
                        <div>
                            <div>
                                <strong>Bolo boludo</strong>
                                <p>@xaolin</p>
                            </div>
                            <div>
                                <p>6 porções</p>
                                <p>40 min</p>
                            </div>
                            <div>
                                <p>800 likes</p>
                            </div>
                        </div>

                        <FiChevronRight size={20} />
                    </a>

                    <a href="teste">
                        <img
                            src="https://img.itdg.com.br/tdg/images/recipes/000/139/574/300138/300138_original.jpg?mode=crop&width=360&height=200"
                            alt="Num sei"
                        />
                        <div>
                            <div>
                                <strong>Bolo boludo</strong>
                                <p>@xaolin</p>
                            </div>
                            <div>
                                <p>6 porções</p>
                                <p>40 min</p>
                            </div>
                            <div>
                                <p>800 likes</p>
                            </div>
                        </div>

                        <FiChevronRight size={20} />
                    </a>

                    <a href="teste">
                        <img
                            src="https://img.itdg.com.br/tdg/images/recipes/000/139/574/300138/300138_original.jpg?mode=crop&width=360&height=200"
                            alt="Num sei"
                        />
                        <div>
                            <div>
                                <strong>Bolo boludo</strong>
                                <p>@xaolin</p>
                            </div>
                            <div>
                                <p>6 porções</p>
                                <p>40 min</p>
                            </div>
                            <div>
                                <p>800 likes</p>
                            </div>
                        </div>

                        <FiChevronRight size={20} />
                    </a>

                    <a href="teste">
                        <img
                            src="https://img.itdg.com.br/tdg/images/recipes/000/139/574/300138/300138_original.jpg?mode=crop&width=360&height=200"
                            alt="Num sei"
                        />
                        <div>
                            <div>
                                <strong>Bolo boludo</strong>
                                <p>@xaolin</p>
                            </div>
                            <div>
                                <p>6 porções</p>
                                <p>40 min</p>
                            </div>
                            <div>
                                <p>800 likes</p>
                            </div>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                </Recipes>
            </Section>
        </ Container>
    )
}

export default Dashboard;