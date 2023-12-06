import logo from '../../assets/Logo.svg';
import { NavContainer, HomeLogo, LinkWrapper, StyledLink } from './header';

function Header() {
  return (
    <NavContainer>
      <HomeLogo src={logo} alt='kasa-logo' />
      <LinkWrapper>
        <StyledLink to='/'>Acceuil</StyledLink>
        <StyledLink to='/about'>A Propos</StyledLink>
      </LinkWrapper>
    </NavContainer>
  );
}

export default Header;
