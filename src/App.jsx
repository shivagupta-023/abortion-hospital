import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { TransitionProvider, useTransition } from './context/TransitionContext';
import PageLoader from './components/PageLoader';
import Layout from './components/Layout';
import Home from './pages/Home';
import PatientJourney from './pages/PatientJourney';
import Abortion from './pages/Abortion';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';

function AppContent() {
  const { loading } = useTransition();
  const location = useLocation();

  // Show loader on initial page load for non-home pages
  const [initLoading, setInitLoading] = useState(
    () => location.pathname !== "/"
  );

  useEffect(() => {
    if (initLoading) {
      const t = setTimeout(() => setInitLoading(false), 900);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      <PageLoader visible={loading || initLoading} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/abortion" element={<Abortion />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <TransitionProvider>
      <AppContent />
    </TransitionProvider>
  );
}

export default App;
