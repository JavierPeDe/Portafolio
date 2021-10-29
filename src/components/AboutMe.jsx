import {
    Container,
    ContainerAboutMe,
    ContainerImg,
    Link,
} from './components.style';
import { FaReact, FaGithub } from 'react-icons/fa';
import Boostrap from '../assets/img/boostrap.png';
import {
    SiTypescript,
    SiJavascript,
    SiCss3,
    SiRedux,
    SiHtml5,
} from 'react-icons/si';
import Typical from 'react-typical';

export const AboutMe = () => {
    return (
        <Container>
            <h2>About me</h2>
            <ContainerAboutMe>
                <div>
                    <h3>Who I am </h3>
                    <p>
                        <b>Software developer</b> and{' '}
                        <b> Electronic and Automation Engineer</b> from the UPC with a
                        postgraduate degree in Systems Automation from the UPC School. BCN
                        School .
                        <br />
                        Proactive with analytical and problem solving skills. Dedicated team
                        member who can also work independently with the ability to adapt to
                        industry requirements and demands.
                    </p>
                    <h3>Education</h3>
                    <p>
                        <b>Bootcamp ITAcademy FE React</b> <br />
                        2021 Barcelona Activa ITAcademy
                    </p>
                    <p>
                        <b>Postgraduate in Automation of Systems </b> <br />
                        2020 - Universitat Politècnica de Catalunya
                    </p>
                    <p>
                        <b>
                            Degree in Industrial Electronics and Automatic Control Engineering{' '}
                        </b>{' '}
                        <br />
                        2016 - Universitat Politècnica de Catalunya (ESEIAAT
                    </p>
                    <Link href="javiercv.pdf" target="_blank">
                        Download CV
                    </Link>
                </div>
                <div>
                    <h3>Skills</h3>
                    <Typical
                        loop={Infinity}
                        steps={[
                            'ReactJS ',
                            1000,
                            'Git',
                            1000,
                            'JavasScript / TypeScript',
                            1000,
                            'HTML & CSS',
                            1000,
                            'Redux',
                            1000,
                            'Boostrap',
                            1000,
                        ]}
                    />
                    <ContainerImg>
                        <div>
                            <FaReact
                                alt="react-logo"
                                title="ReactJS"
                                style={{ color: '#61DBFB' }}
                            />
                        </div>
                        <div>
                            <FaGithub
                                alt="git-logo"
                                title="GIT"
                                style={{ color: '#f34f29' }}
                            />
                        </div>
                        <div>
                            <SiJavascript
                                alt="react-logo"
                                title="JavaScript"
                                style={{ color: ' #F0DB4F' }}
                            />
                        </div>
                        <div>
                            <SiCss3
                                alt="react-logo"
                                title="CSS"
                                style={{ color: '#264de4' }}
                            />
                        </div>
                        <div>
                            <SiHtml5
                                alt="react-logo"
                                title="HTML"
                                style={{ color: '#E34C26' }}
                            />
                        </div>
                        <div>
                            <SiTypescript
                                alt="react-logo"
                                title="TypeScript"
                                style={{ color: '#007' }}
                            />
                        </div>
                        <div>
                            <SiRedux
                                alt="react-logo"
                                title="Redux"
                                style={{ color: '#764abc' }}
                            />
                        </div>
                        <div>
                            <img src={Boostrap} title="Boostrap" alt="boostrap-icon" />
                        </div>
                    </ContainerImg>
                </div>
            </ContainerAboutMe>
        </Container>
    );
};
