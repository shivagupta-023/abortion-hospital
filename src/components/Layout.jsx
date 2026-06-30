import { Outlet } from 'react-router-dom';
import Navbar from '../sections/Home/Navbar';
import Footer from '../sections/Home/Footer';
import FloatingCTA from '../sections/Home/FloatingCTA';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingCTA />
    </>
  );
}
