import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenUrlForm from './components/ShortenUrlForm';
import RedirectFormSlug from './components/Redirect';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ShortenUrlForm />
            </Layout>
          }
        />
        <Route
          path="/:slug"
          element={
            <Layout>
              <RedirectFormSlug />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center text-red-500 text-xl font-semibold">
                404 - Page non trouvée
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
