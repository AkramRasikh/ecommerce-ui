import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
}

const StyledTitle = styled.h1`
  line-height: 1.5rem;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    margin: 40px 0;
  }
`;

const Title = ({ children }: TitleProps) => (
  <StyledTitle>{children}</StyledTitle>
);

export default Title;
