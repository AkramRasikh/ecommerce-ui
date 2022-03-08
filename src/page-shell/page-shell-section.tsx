import styled from "styled-components";

interface PageShellSectionProps {
  children: React.ReactNode;
}

const StyledPageShellSection = styled.div`
  padding: 12px 16px;
  max-width: 1068px;
  margin: auto;
`;

const PageShellSection = ({ children }: PageShellSectionProps) => (
  <StyledPageShellSection>{children}</StyledPageShellSection>
);

export default PageShellSection;
