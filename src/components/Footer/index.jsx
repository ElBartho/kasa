import Logo from '../../assets/footerLogo.svg';
import { FooterWrapper, LogoFooter, FooterText } from './footer';

function Footer() {
  return (
    <FooterWrapper>
      <LogoFooter src={Logo} />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
