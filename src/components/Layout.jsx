import React from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Topbar />
      <main className="flex-grow pt-[80px] md:pt-[110px]">
        <Outlet />
      </main>
      <Footer />
    </div>

  );
};

export default Layout;
