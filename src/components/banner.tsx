import styled from "styled-components";

interface BannerProps {
  bannerTexts: { message: string; code: string };
}

const StyledBannerContainer = styled.div`
  text-align: center;
  background: #f2f2f2;
`;

const StyledBannerText = styled.span`
  display: block;
  line-height: 1.7rem;
  color: #dc463c;
  font-weight: bold;
`;

const Banner = ({ bannerTexts: { message, code } }: BannerProps) => (
  <StyledBannerContainer>
    <StyledBannerText>{message}</StyledBannerText>
    <StyledBannerText>{code}</StyledBannerText>
  </StyledBannerContainer>
);

export default Banner;
