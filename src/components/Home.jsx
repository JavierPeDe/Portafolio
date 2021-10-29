import { HomeContainer, ButtonCV, HomeImg, Link } from "./components.style"
import perfilIMG from '../assets/img/Perfil.jpg'
export const Home = () => {
    return (
        <HomeContainer>
            <div>
                <span>
                    <h1>Hello, </h1>
                    <h2>
                        I'm<span> JAVIER PEREZ </span>
                    </h2>
                    <span>
                        {' '}
                        Front End Software Developer{' '}
                    </span>
                </span>

                <div>
                    <Link href="#contactme"> Contact Me</Link>
                    <a href="javiercv.pdf" target="_blank">
                        <ButtonCV>Get CV</ButtonCV>
                    </a>
                </div>
            </div>
            <HomeImg>
                <img src={perfilIMG} alt='img perfil' />
            </HomeImg>
        </HomeContainer>
    )
}
