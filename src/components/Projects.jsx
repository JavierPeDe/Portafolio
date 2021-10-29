import {
    Card,
    IMGP3,
    IMGP2,
    ContainerSkills,
    IMGP1,
    IMGP4,
    Capa,
    IconsStyle,
    Container,
} from './components.style';
import { IoIosOpen } from 'react-icons/io';
import { VscGithub } from 'react-icons/vsc';
export const Projects = () => {
    return (
        <Container>
            <h2>Some personal projects</h2>

            <ContainerSkills>
                <Card>
                    <Capa>
                        <h3>Covid-Evolution</h3>
                        <p>
                            Covid-19-Evolution-in-the-World is a covid-19 tracker which
                            displays the infected, recovered and fatalities of the country
                            selected by the user.{' '}
                        </p>
                        <IconsStyle>
                            <a href="https://u8pp1.csb.app/" rel="noreferrer" target="_blank">
                                <IoIosOpen title="Open demo" />{' '}
                            </a>
                            <a
                                href="https://github.com/JavierPeDe/Covid-19-Evolution-in-the-World"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <VscGithub title="Open Git-hub code" />
                            </a>
                        </IconsStyle>
                    </Capa>
                    <IMGP3 />
                </Card>
                <Card>
                    <Capa>
                        <h3>Web-Note CRUD</h3>
                        <p>
                            Web note is a CRUD note management project that uses React and
                            google's firebase.
                        </p>
                        <IconsStyle>
                            <IoIosOpen title="Open demo" />
                            <a
                                href="https://github.com/JavierPeDe/WebNote-React-CRUD"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <VscGithub title="Open Git-hub code" />
                            </a>
                        </IconsStyle>
                    </Capa>
                    <IMGP2 />
                </Card>
                <Card>
                    <Capa>
                        <h3>Star Wars Wiki</h3>
                        <p>
                            Star Wars Wiki is a personal project that provides information on
                            all StarWars ships.
                        </p>
                        <IconsStyle>
                            <a
                                href="https://github.com/JavierPeDe/StarWars-StarShips"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <VscGithub title="Open Git-hub code" />{' '}
                            </a>
                        </IconsStyle>
                    </Capa>
                    <IMGP1 />
                </Card>
                <Card>
                    <Capa>
                        <h3>Chat-app</h3>
                        <p>
                            This is chat app created with ReactJS and Chat-Engine.
                        </p>
                        <IconsStyle>
                            <a
                                href="https://pevfo.csb.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <IoIosOpen title="Open demo" /></a>
                            <a
                                href="https://github.com/JavierPeDe/Chat-app"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <VscGithub title="Open Git-hub code" />{' '}
                            </a>
                        </IconsStyle>
                    </Capa>
                    <IMGP4 />
                </Card>
            </ContainerSkills>
        </Container>
    );
};