import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, ContactContainer } from './components.style';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export const ContactMe = () => {
    const form = useRef();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_broqv4f',
                'template_yo839jp',
                form.current,
                'user_93uHxqSyXPRJBfubYSHls'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showResult(true);
    };
    setTimeout(() => {
        showResult(false);
    }, 5000);
    return (
        <ContactContainer>
            <Container>
                <h2> Contact me </h2>
                <form ref={form} onSubmit={sendEmail}>
                    <h3> Send me an email</h3>
                    <label>Name</label>s
                    <input type="text" name="to_name" /> <br />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <br />
                    <label>Phone</label>
                    <input type="phone" name="phone" />
                    <br />
                    <label>Message</label>
                    <textarea name="message" />
                    <button type="submit"> Send </button>
                    {result ? (
                        <p>
                            Your message has been successfully sent. I will contact you soon!
                        </p>
                    ) : null}
                </form>
                <h3>Contact with </h3>
                <div>
                    {' '}
                    <a
                        href="https://www.linkedin.com/in/javierpd/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiLinkedin />
                    </a>{' '}
                    <a
                        href="https://github.com/JavierPeDe"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiGithub />
                    </a>
                </div>
                <div>
                    <p>
                        Copyright © 2021. JavierPerezDelfa <br />
                        All Rights Reserved
                    </p>
                </div>
            </Container>
        </ContactContainer>
    );
};
