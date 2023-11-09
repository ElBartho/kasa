import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: black;
  padding: 66px 120.31px 58px 121.09px;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 920px) {
    padding: 66px 464px 29px 463px;
    gap: 28.556px;
  }
`;

export const LogoFooter = styled.img`
  width: 122px;
  height: 39.444px;
`;

export const FooterText = styled.div`
  margin: 0;
  height: 46px;
  color: white;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  width: 100px;
  @media (min-width: 920px) {
    font-size: 24px;
    width: 513px;
  }
`;
