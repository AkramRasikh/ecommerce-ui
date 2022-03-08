import styled from "styled-components";

interface PageShellContainerProps {
  children: React.ReactNode;
  withPadding: boolean;
}

const StyledPageShellContainer = styled.div<{ withPadding: boolean }>`
  padding: ${({ withPadding }) => withPadding && "12px 16px"};
`;

const PageShellContainer = ({
  withPadding,
  children,
}: PageShellContainerProps) => (
  <StyledPageShellContainer withPadding={withPadding}>
    {children}
  </StyledPageShellContainer>
);

export default PageShellContainer;
