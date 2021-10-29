import styled from 'styled-components';
export const NavbarContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #202020;
  color: #707070;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1300px;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const NavbarItems = styled.ul`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  @media screen and (max-width: 960px) {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 75px;
    left: ${({ showMenu }) => (showMenu ? 0 : '-100%')};
    flex-direction: column;
    transition: 0.3s all ease-in;
    background-color: #202020;
    padding: 0;
  }
`;

export const MenuItem = styled.li`
  margin: 0;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 0.3rem 1.5rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60px;
    padding: 0;
  }
`;

export const MenuItemLink = styled.a`
  color: #707070;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
  &:hover {
    color: #ffdf6c;
    text-decoration: underline #3f3f3f;
  }
`;

export const Icon = styled.div`
  display: flex;
  padding-left: 1rem;
  h1 {
    &:hover {
      color: rgba(255, 223, 108, 0.7);
    }
  }
`;

export const BurguerIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    padding-right: 1rem;
    display: flex;
    font-size: 2rem;
    widht: 100%;
  }
`;
