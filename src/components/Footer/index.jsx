import Logo from '../../assets/footerLogo.svg';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: black;
  /* height: 209px; */
  padding: 66px 464px 29px 463px;
  justify-content: flex-end;
  align-items: center;
  gap: 28.556px;
`;

const LogoFooter = styled.img`
  width: 122px;
  height: 39.444px;
`;

const FooterText = styled.p`
  margin: 0;
  width: 513px;
  height: 46px;
  color: white;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */
`;

function Footer() {
  return (
    <FooterWrapper>
      <LogoFooter src={Logo} />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
