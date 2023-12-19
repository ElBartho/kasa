import Layout from './components/Layout';
import AllRoutes from './AllRoutes';
import Error from './pages/Error';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  function errorId({ error, resetErrorBoundary }) {
    // resetErrorBoundary();
    // console.log(error);
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }
  return (
    <Layout>
      <ErrorBoundary
        FallbackComponent={errorId}
        onReset={(details) => {
          console.log(details);
        }}
      >
        <AllRoutes />
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
