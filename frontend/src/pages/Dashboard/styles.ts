import styled from 'styled-components';
import { shade } from 'polished';

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
        transition: color 0.2s;
        
        &:hover {
        color: #ed4a65;
        }
    }
`

export const Section = styled.section`   
    padding: 0 20px; 
`

export const Form = styled.form`
    margin-top: 80px;
   
    h1 {
        font-size: 45px;
        color: #333333;
        max-width: 600px; 
        line-height: 56px;
    }

    div {
        max-width: 700px;
        display: flex;
        margin-top: 40px;

        input {
            flex: 1;
            height: 55px;
            border: none;
            border-radius: 5px 0 0 5px;
            padding: 0 24px;
            color: #3a3a3a;
        }

        button {
            border: none;
            background: #ed4a65;
            width: 210px;            
            height: 55px;
            border-radius: 0 5px 5px 0;
            color: #FDFDFD;
            font-weight: bold;
            font-size: 16px;
            transition: background-color 0.2s;

            &:hover {
                background:  ${shade(0.2,'#ed4a65')}
            }
        }
    }
`

export const Highlight = styled.div`
    margin-top: 40px;

    h1 {
            font-size: 45px;
            color: #333333;
            max-width: 600px; 
            line-height: 56px;
    }
`

export const Recipes = styled.div`
    margin-top: 80px;
    
    a {
        background: #fdfdfd;
        border-radius: 5px;
        width: 60%;
        padding: 24px;
        display: block;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
             margin-top: 16px;
        }

        svg {
            &:last-child {
                margin-left: auto;
                color: #a3a3a3;
            }
        }
    }

    img {
        width: 74px;
        height: 74px;
        border-radius: 50%;
    }

    div {
        margin-left: 16px;
        color: #3a3a3a;

        div {
            display: flex;
            align-items: center;

            & + div {
                margin-top: 6px;
                color: #757575;
                align-items: center;

                svg {
                    color: #757575;
                }

                svg + p{
                    margin-right: 8px;
                }
            }

            strong {
                font-size: 20px;
                color: #333333;
            }

            strong + p {
                color: #a3a3a3;
                margin-left: 8px;
            }

            svg + p {
                margin-left: 6px;
            }

            &:last-child {
                margin-top: 10px;

                svg {
                    margin-left: 0;
                    color: #f0323f;
                } 
            }
        } 
    }
`