import styled from "styled-components";

const StyledMenuIconStripe = styled.div`
  width: 24px;
  height: 1px;
  background-color: black;
  margin: 6px 0;
`;

const MenuIcon = () => (
  <div>
    <StyledMenuIconStripe />
    <StyledMenuIconStripe />
    <StyledMenuIconStripe />
  </div>
);

export default MenuIcon;
