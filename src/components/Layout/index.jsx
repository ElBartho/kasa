import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '../../utils/style/GlobalStyle';
import Header from '../../components/Header';

const Layout = ({ children }) => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      {children}
    </Router>
  );
};

export default Layout;
