import React, { useState } from 'react';
import {
  Icon,
  NavbarContainer,
  NavbarWrapper,
  NavbarItems,
  MenuItem,
  MenuItemLink,
  BurguerIcon,
} from './menu.style';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AboutMe } from './components/AboutMe';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';
export const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="App">
      <NavbarContainer>
        <NavbarWrapper>
          <Icon>
            <h1>{'<JPerez/>'} </h1>
          </Icon>
          <BurguerIcon onClick={() => handleOnClick()}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </BurguerIcon>
          <NavbarItems showMenu={showMenu}>
            <div onClick={() => handleOnClick()}></div>
            <MenuItem onClick={() => handleOnClick()}>
              <MenuItemLink href="#home">HOME </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => handleOnClick()}>
              <MenuItemLink href="#aboutme">ABOUT ME</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => handleOnClick()}>
              <MenuItemLink href="#projects">PROJECTS </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => handleOnClick()}>
              <MenuItemLink href="#contactme">CONTACT ME </MenuItemLink>
            </MenuItem>
          </NavbarItems>
        </NavbarWrapper>
      </NavbarContainer>

      <section id="home">
        <Home />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
    </div>
  );
};
