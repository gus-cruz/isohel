import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaHeart, FaStopwatch } from 'react-icons/fa';
import { GiHotMeal } from 'react-icons/gi'

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
    Recipes,
    Highlight
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
                {/* <Highlight>
                    <h1>Receitas em destaque</h1>
                </Highlight> */}

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
                                <GiHotMeal size={20} />
                                <p>6 porções</p>
                                <FaStopwatch size={18} />
                                <p>40 min</p>
                            </div>
                            <div>
                                <FaHeart size={20} /> 
                                <p>800</p>
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
                                <GiHotMeal size={20} />
                                <p>6 porções</p>
                                <FaStopwatch size={18} />
                                <p>40 min</p>
                            </div>
                            <div>
                                <FaHeart size={20} /> 
                                <p>800</p>
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
                                <GiHotMeal size={20} />
                                <p>6 porções</p>
                                <FaStopwatch size={18} />
                                <p>40 min</p>
                            </div>
                            <div>
                                <FaHeart size={20} /> 
                                <p>800</p>
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
                                <GiHotMeal size={20} />
                                <p>6 porções</p>
                                <FaStopwatch size={18} />
                                <p>40 min</p>
                            </div>
                            <div>
                                <FaHeart size={20} /> 
                                <p>800</p>
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
                                <GiHotMeal size={20} />
                                <p>6 porções</p>
                                <FaStopwatch size={18} />
                                <p>40 min</p>
                            </div>
                            <div>
                                <FaHeart size={20} /> 
                                <p>800</p>
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