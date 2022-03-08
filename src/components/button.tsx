import styled from "styled-components";

const StyledButton = styled.button<{
  withBorder?: boolean;
  withPadding?: boolean;
  disabled?: boolean;
}>`
  background: none;
  border: ${({ withBorder }) => (withBorder ? "2px black solid" : "none")};
  border: ${({ disabled }) => disabled && "2px #666 solid"};
  padding: ${({ withPadding }) => (withPadding ? "10px" : "auto")};
  cursor: pointer;
`;
// overwiter btn to be refactored

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  onClick?: () => void;
  withBorder?: boolean;
  disabled?: boolean;
  withPadding?: boolean;
}

const Button = ({
  children,
  className,
  withBorder,
  withPadding,
  disabled = false,
  onClick,
  icon,
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    withBorder={withBorder}
    withPadding={withPadding}
    className={className}
    disabled={disabled}
  >
    {children}
    {icon && icon}
  </StyledButton>
);

export default Button;
