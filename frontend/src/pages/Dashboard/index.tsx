import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaHeart, FaStopwatch } from 'react-icons/fa';
import { GiHotMeal } from 'react-icons/gi'

import api from '../../services/api';

import logoImg from '../../assets/isohel-logo.svg';
import logoKairos from '../../assets/kairos-logo.png';

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
    Footer
} from './styles';

interface Content {
    username: string;
    recipe: {
        id: string;
        title: string;
    }
}

const Dashboard: React.FC = () => {
    const [searchRecipe, setSearchRecipe] = useState('');
    const [content, setContent] = useState<Content[]>([]);
   
    async function handleSearchRecipe(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        const response = await api.get<Content[]>(`recipes`);

        const contentLoaded = response.data;

        setContent(contentLoaded);

        console.log(content);
    }

    return (
        <Container>
            <Header>
                <LogoMenu href="#">
                    <Logo src={logoImg} alt="isohel" />
                    <Title>ISOHEL</Title>
                </LogoMenu>

                <Sign>
                    <Link to="/signup">cadastrar</Link>
                    <Link to="/signin">entrar</Link>
                </Sign>
            </Header>

            <Section>
                {/* <Highlight>
                    <h1>Receitas em destaque</h1>
                </Highlight> */}

                <Form onSubmit={handleSearchRecipe}>
                    <h1>Encontre a receita perfeita para você</h1>
                    <div>
                        <input
                            value={searchRecipe}
                            onChange={(e) => setSearchRecipe(e.target.value)}
                            placeholder="Informe o nome da receita"
                        />
                        <button type="submit">Pesquisar</button>
                    </div>
                    <div>
                        <ul>
                            <li><input type="checkbox" id="cake" value="Rainbow Dash" />
                                <label htmlFor="cake">#bolos</label>
                            </li>
                            <li><input type="checkbox" id="meat" value="Rainbow Dash" />
                                <label htmlFor="meat">#carnes</label>
                            </li>
                            <li><input type="checkbox" id="bird" value="Rainbow Dash" />
                                <label htmlFor="bird">#aves</label>
                            </li>
                            <li><input type="checkbox" id="fish" value="Rainbow Dash" />
                                <label htmlFor="fish">#peixes</label>
                            </li>
                        </ul>
                    </div>
                </Form>

                <Recipes>
                    {content.map(info => (                       
                        <a key={info.recipe.id} href="teste">
                        <img
                            src="https://img.itdg.com.br/tdg/images/recipes/000/139/574/300138/300138_original.jpg?mode=crop&width=360&height=200"
                            alt="Num sei"
                        />
                        <div>
                            <div>
                                <strong>{info.recipe.title}</strong>
                                <p>@{info.username}</p>
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
                    ))}
                </Recipes>
            </Section>

            <Footer>
                <a href="teste">
                    <img src={logoKairos}/>
                </ a>
            </ Footer>
        </ Container>
    )
}

export default Dashboard;