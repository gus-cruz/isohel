import React, { FormEvent, useState } from 'react';
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
                    <a href="#">cadastrar</a>
                    <a href="#">entrar</a>
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