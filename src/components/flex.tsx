import styled from "styled-components";

interface FlexContainerProps {
  children: React.ReactNode;
  justifyContent?: string;
  flexDirection?: string;
  flexFlow?: string;
  dataTestId?: string;
  className?: string;
}

interface StyledFlexContainerProps {
  justifyContent?: string;
  flexFlow?: string;
  flexDirection?: string;
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  flex-flow: ${({ flexFlow }) => flexFlow && flexFlow};
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
`;

const FlexContainer = ({
  justifyContent,
  flexFlow,
  flexDirection,
  className,
  dataTestId,
  children,
}: FlexContainerProps) => (
  <StyledFlexContainer
    justifyContent={justifyContent}
    flexFlow={flexFlow}
    flexDirection={flexDirection}
    data-testid={dataTestId}
    className={className}
  >
    {children}
  </StyledFlexContainer>
);

export default FlexContainer;
