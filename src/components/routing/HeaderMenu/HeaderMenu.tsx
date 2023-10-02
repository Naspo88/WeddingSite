import { ReactNode } from "react";
import styled from "styled-components";
import { Page } from "../../../App";
import logo from "./logo.svg";

interface HeaderMenuProps {
  children: ReactNode;
  pages?: Page[];
}

const MenuBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #232323;
  color: white;
`;

const HeaderMenu = ({ children, pages = [] }: HeaderMenuProps) => (
  <>
    <MenuBar>
      <img src={logo} alt="homepage-logo" />
      {pages.map(({ href, name }) => (
        <a href={`/WeddingSite${href}`}>{name}</a>
      ))}
    </MenuBar>
    {children}
  </>
);

export default HeaderMenu;
