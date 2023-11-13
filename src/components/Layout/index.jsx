import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '../../utils/style/GlobalStyle';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Root, HeaderChildWrapper } from './layout';

const Layout = ({ children }) => {
  return (
    <Router>
      <GlobalStyle />
      <Root>
        <HeaderChildWrapper>
          <Header />
          {children}
        </HeaderChildWrapper>
        <Footer />
      </Root>
    </Router>
  );
};

export default Layout;
