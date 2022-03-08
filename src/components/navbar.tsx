import styled from "styled-components";
import { NavItemData } from "../page-shell";
import Button from "./button";
import UListItem, { ListItem } from "./list";

interface NavbarProps {
  navItems: NavItemData[];
}

const StyledNavbar = styled.nav`
  padding: 12px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavItem = styled(Button)<{ color?: string }>`
  padding: 0px 12px;
  color: ${({ color }) => color && color};
`;

const Navbar = ({ navItems }: NavbarProps) => (
  <StyledNavbar>
    <UListItem display='flex' flexWrap='wrap'>
      {navItems.map(({ name, color }, index) => (
        <ListItem key={index}>
          <StyledNavItem color={color}>
            <strong>{name}</strong>
          </StyledNavItem>
        </ListItem>
      ))}
    </UListItem>
  </StyledNavbar>
);

export default Navbar;
