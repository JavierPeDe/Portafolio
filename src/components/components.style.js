import styled from 'styled-components';
import pcovid from '../assets/img/pcovid.png';
import pwebnote from '../assets/img/pwebnote.png';
import pstarwars from '../assets/img/pstarwars.png';
import pchatapp from '../assets/img/pchatapp.PNG';
/*Home Components Styled*/

export const HomeContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&family=Montserrat:wght@400;500&display=swap');
  font-family: 'Merriweather', serif;
  background: #202020;
  color: #fff;
  background-size: cover;
  min-height: fit-content;
  height: auto;
  min-height: 60vh;
  clip-path: polygon(0 0, 100% 0, 100% 94%, 0% 100%);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  text-align: center;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  h1 {
    color: #707070;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    margin: 2px;
  }
  h2 {
    font-size: 3rem;
    margin: 0;
  }
`;

export const ButtonCV = styled.button`
  margin: 10px;
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #ffdf6c;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.6s ease;
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: white;
  z-index: 4;
  background: #202020;
  color: #ffdf6c;
  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #ffdf6c;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #202020;
    &:after {
      left: 0;
      width: 100%;
    }
  }
`;

export const HomeImg = styled.div`
  max-height: 300px;
  max-width: 300px;

  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ffdf6c;
  img {
    max-width: 300px;
    width: auto;
    height: auto;
    repeat: no-repeat;
    attachment: fixed;
    position: center;
  }
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&family=Montserrat:wght@400;500&display=swap');
  // font-family: 'Merriweather', serif;

  max-width: 1200px;
  margin: 2rem auto;
  padding: 5rem 2rem 0 2rem;
  text-align: center;

  h2 {
    text-align: left;
    max-witdh: 600px;
    border-bottom: 2px solid #ffdf6c;
    margin: 0;
  }
`;

export const ContainerAboutMe = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerImg = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 60px;
  margin: 0;
  padding: 0;
  div {
    transition: transform 0.5s;
    &:hover {
      transform: translateY(-10px);
    }
  }
  img {
    height: 60px;
    widht: 60px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ContainerSkills = styled.div`
  margin-top: 18px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
export const IMGP4 = styled.div`
  background-image: url(${pchatapp});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 500ms ease-out;
`;

export const IMGP3 = styled.div`
  background-image: url(${pcovid});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 500ms ease-out;
  z-index: 0;
`;

export const IMGP2 = styled.div`
  background-image: url(${pwebnote});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 500ms ease-out;
`;

export const IMGP1 = styled.div`
  background-image: url(${pstarwars});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 500ms ease-out;
`;

export const Card = styled.div`
  border: 2px solid #ffdf6c;
  width: 28rem;
  height: 13rem;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const Capa = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 1);
  transition: all 500ms ease-out;
  left: -100%;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
  p {
    padding: 0 3px;
  }
  color: #fff;
  ${Card}:hover & {
    left: 0;
  }
`;

export const IconsStyle = styled.div`
  font-size: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const ContactContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&family=Montserrat:wght@400;500&display=swap');
  font-family: 'Merriweather', serif;
  background: #202020;
  color: #fff;
  background-size: cover;
  min-height: fit-content;
  padding-bottom: 4rem;
  form {
    margin-top: 6rem;
    overflow: hidden;
    background: #202020;
    border: 1px solid #202020;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }
  input,
  textarea {
    background: #707070;
    color: #fff;
    border: 1px solid #707070;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
  label {
    text-align: left;
    color: #fff;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  button {
    background-color: #ffdf6c;
    color: #000;
    font-size: 1rem;
    margin: 20px 0px;
    padding: 10px;
  }
  div {
    a {
      font-size: 2rem;
      color: #fff;
      padding: 1rem;
    }
  }
`;

export const Link = styled.a`
  font-size: 1.2rem;
  color: #ffdf6c;
  padding: 10px;
  font-weight: bold;
`;
