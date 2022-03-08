import React from "react";
import styled from "styled-components";

const StyledProductText = styled.span<{
  color?: string;
  fontSize?: number;
  marginBottom?: number;
}>`
  color: ${({ color }) => color && color};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "8px"};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
`;

interface ProductTextProps {
  color?: string;
  fontSize?: number;
  marginBottom?: number;
  children: React.ReactNode;
}

const ProductText = ({
  color,
  marginBottom,
  fontSize = 14,
  children,
}: ProductTextProps) => (
  <StyledProductText
    color={color}
    fontSize={fontSize}
    marginBottom={marginBottom}
  >
    {children}
  </StyledProductText>
);

export default ProductText;
