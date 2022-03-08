import Logo from "./logo";
import styled from "styled-components";
import FlexContainer from "../flex";
import { MenuIcon } from "../../assets/icons";

const StyledHeader = styled.header`
  padding: 12px 16px;
  border-bottom: 1px solid #d9d9d9;
`;

const HeaderFlexContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    div:first-child {
      display: none;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <HeaderFlexContainer justifyContent='space-between'>
      <MenuIcon />
      <Logo />
      <div /> {/* remove! */}
    </HeaderFlexContainer>
  </StyledHeader>
);

export default Header;
