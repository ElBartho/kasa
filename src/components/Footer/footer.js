import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: black;
  padding: 64px 0px;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin: auto;
`;

export const LogoFooter = styled.img`
  width: 122px;
  height: 40px;
`;

export const FooterText = styled.div`
  color: white;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  width: 100px;
  @media (min-width: 920px) {
    font-size: 24px;
    width: inherit;
  }
`;
