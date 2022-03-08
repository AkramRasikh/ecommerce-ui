import styled from "styled-components";
import Button from "../button";
import FlexContainer from "../flex";
import { ProductProps } from "../../pages/landing";
import SelectInput from "../input/select";
import ProductText from "./product-text";
import React from "react";

const StyledProductContainer = styled(FlexContainer)`
  flex-flow: column;
  text-align: center;
`;

const StyledBottomContainer = styled(FlexContainer)`
  height: 100%;
  gap: 10px;
`;

const StyledTopContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
`;

const StyledIMG = styled.img`
  height: 250px;
`;

const StyledCTAButton = styled(Button)`
  padding-top: 0;
  display: flex;
  margin-left: auto;
  font-size: 18px;
`;

const StyledTagSpan = styled.span`
  color: #dcc850;
  letter-spacing: 1px;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%);
  font-size: 11px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Product = ({
  isNewWithTag,
  designer,
  name,
  size,
  image,
  price,
  sizes,
  retail,
  id,
}: ProductProps) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  const options = sizes?.map(({ name }) => name);
  const disableBtn = !!sizes && selectedValue === "";

  return (
    <StyledProductContainer dataTestId={`product-id-${id}`}>
      <StyledTopContainer>
        {isNewWithTag && <StyledTagSpan>NEW WITH TAG</StyledTagSpan>}
        <StyledCTAButton>X</StyledCTAButton>
      </StyledTopContainer>
      <div>
        <StyledIMG src={image} alt='item-pic' />
      </div>
      {designer && (
        <ProductText fontSize={11}>
          <strong>{designer}</strong>
        </ProductText>
      )}
      {name && <ProductText fontSize={14}>{name}</ProductText>}
      {!!sizes?.length && (
        <ProductText color='#666' fontSize={14} marginBottom={14}>
          More sizes Available
        </ProductText>
      )}
      {size && (
        <ProductText color='#666' fontSize={14} marginBottom={14}>
          {size}
        </ProductText>
      )}
      {price && <ProductText fontSize={14}>€{price}</ProductText>}
      {retail && (
        <ProductText color='#666' fontSize={10}>
          <strong>Est. Retail: €{retail}</strong>
        </ProductText>
      )}
      <StyledBottomContainer flexFlow='column' flexDirection='column-reverse'>
        <Button withBorder withPadding disabled={disableBtn}>
          <strong>ADD TO CART</strong>
        </Button>
        {!!options?.length && (
          <SelectInput
            options={options}
            placeholder='SELECT SIZE'
            value={selectedValue}
            handleChange={handleChange}
          />
        )}
      </StyledBottomContainer>
    </StyledProductContainer>
  );
};

export default Product;
