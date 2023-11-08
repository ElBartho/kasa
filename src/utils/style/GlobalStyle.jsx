import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat';
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
