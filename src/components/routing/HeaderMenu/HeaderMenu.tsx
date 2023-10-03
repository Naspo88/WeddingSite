import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Page } from "../../../App";

interface HeaderMenuProps {
  children: ReactNode;
  pages?: Page[];
}

const MenuBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #27295f;
  color: #dbdbdb;
  gap: 16px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #dbdbdb;
  &:hover {
    color: #ffffff;
  }
`;

const HeaderMenu = ({ children, pages = [] }: HeaderMenuProps) => (
  <>
    <MenuBar>
      {pages.map(({ href, name }) => (
        <StyledLink to={`/WeddingSite${href}`}>{name}</StyledLink>
      ))}
    </MenuBar>
    {children}
  </>
);

export default HeaderMenu;
