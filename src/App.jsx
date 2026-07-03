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
import About from './pages/About';
import Legal from './pages/Legal';

function AppContent() {
  const { loading } = useTransition();
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

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
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/legal" element={<Legal />} />
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
