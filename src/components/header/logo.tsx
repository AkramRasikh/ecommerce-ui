import styled from "styled-components";

const LogoContainer = styled.div`
  margin: auto;
`;

const StyledLogo = styled.img`
  height: 16px;
  @media screen and (min-width: 768px) {
    height: 35px;
  }
`;

const Logo = () => (
  <LogoContainer>
    <StyledLogo src='https://media.lampoo.com/logo/websites/1/Lampoo_logotype_black_1_.png' />
  </LogoContainer>
);

export default Logo;
