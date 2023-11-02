import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useParams } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  & a:focus {
    text-decoration: underline;
  }
`;

const HomeLogo = styled.img`
  height: 70px;
`;

const StyledLink = styled(Link)`
  padding: 15px 30px 15px 30px;
  color: ${colors.primary};
  text-decoration: none;
`;

function Header() {
  const { param } = useParams();
  console.log(param);
  return (
    <NavContainer>
      <HomeLogo src={logo} alt='kasa-logo' />
      <div>
        <StyledLink to='/'>Acceuil</StyledLink>
        <StyledLink to='/about'>A Propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
