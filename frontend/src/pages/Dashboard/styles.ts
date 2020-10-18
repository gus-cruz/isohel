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
        margin-bottom: 40px;
    }

    ul {
        margin-left: 10px;
        margin-top: 8px;
        list-style: none;

        li {
            display: inline;
            margin-right: 8px;

            input{
                position: absolute;
                left: -100vw;
            }

            input[type="checkbox"]:checked + label::before {
                transform: rotate(-360deg);
                transition: transform .3s ease-in-out;
            }

            input[type="checkbox"]:checked + label {
                color: #f0323f;
                transition: all .2s;
            }

            label {
                color: #6D6D6D;
                font-size: 14px;
                display: inline-block;
                cursor: pointer;
                white-space: nowrap;
                margin: 3px 0px;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;

                &:hover {
                    color: #222222;
                }
            }
        }
    }

    div {
        max-width: 700px;
        display: flex;

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
    display: flex;
    flex-wrap: wrap;

    & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    a {
        &:nth-child(2n) {
            margin-left: 20px;
        }

        background: #fdfdfd;
        border-radius: 5px;
        padding: 24px;
        display: block;
        display: flex;
        flex: 0 49%;
        width: 50%;
        align-items: center;
        transition: transform 0.2s;
        margin: 10px 0;

        &:hover {
            transform: translateX(10px);
        }

        svg {
            &:last-child {
                margin-left: auto;
                color: #a3a3a3;
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
    }

`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;

    img {
        width: 80px;
        opacity: 0.3;
    }

    a {
        margin-bottom: 30px;
    }
`