import { Outlet, Navigate } from 'react-router-dom';
import settings from '../config/settings.json';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  if (settings.comingSoon) {
    return <Navigate to="/coming-soon" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
