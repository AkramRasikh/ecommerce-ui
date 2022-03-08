import React from "react";
import styled from "styled-components";

interface StyledUnorderedListsProps {
  display?: string;
  flexWrap?: string;
  justifyContent?: string;
  gap?: string;
}
interface StyledListItemProps {
  display?: string;
}

const StyledUnorderedLists = styled.ul<StyledUnorderedListsProps>`
  display: ${({ display }) => (display ? display : "block")};
  flex-wrap: ${({ flexWrap }) => flexWrap && flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  gap: ${({ gap }) => gap && gap};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li<StyledListItemProps>`
  display: ${({ display }) => display && display};
`;

interface UnorderedListItemProps {
  dataTestId?: string;
  display?: string;
  flexWrap?: string;
  justifyContent?: string;
  className?: string;
  gap?: string;
  children: React.ReactNode;
}

interface ListItemProps {
  dataTestId?: string;
  className?: string;
  display?: string;
  children: React.ReactNode;
}

const UListItem = ({
  display,
  flexWrap,
  gap,
  dataTestId,
  justifyContent,
  className,
  children,
}: UnorderedListItemProps) => (
  <StyledUnorderedLists
    data-testid={dataTestId}
    className={className}
    display={display}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    gap={gap}
  >
    {children}
  </StyledUnorderedLists>
);

export const ListItem = ({
  dataTestId,
  className,
  children,
  display,
}: ListItemProps) => (
  <StyledListItem
    data-testid={dataTestId}
    display={display}
    className={className}
  >
    {children}
  </StyledListItem>
);

export default UListItem;
