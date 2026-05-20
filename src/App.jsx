import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import Login from './components/Login';

// Individual Service Pages
import OceanFreight from './pages/services/OceanFreight';
import AirFreight from './pages/services/AirFreight';
import RoadTransport from './pages/services/RoadTransport';
import Warehousing from './pages/services/Warehousing';
import Distribution from './pages/services/Distribution';
import SupplyChain from './pages/services/SupplyChain';

// Individual Solution Pages
import OnDemand from './pages/solutions/OnDemand';
import HouseMoving from './pages/solutions/HouseMoving';
import MeroUpaya from './pages/solutions/MeroUpaya';
import Hyperlocal from './pages/solutions/Hyperlocal';
import Fulfillment from './pages/solutions/Fulfillment';

import Dashboard from './pages/admin/Dashboard';
import Email from './pages/admin/Email';
import Career from './pages/admin/Career';
import ContentManager from './pages/admin/ContentManager';
import AdminLogin from './pages/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        
        {/* Service Sub-pages */}
        <Route path="/services/ocean" element={<OceanFreight />} />
        <Route path="/services/air" element={<AirFreight />} />
        <Route path="/services/road" element={<RoadTransport />} />
        <Route path="/services/warehousing" element={<Warehousing />} />
        <Route path="/services/distribution" element={<Distribution />} />
        <Route path="/services/supply-chain" element={<SupplyChain />} />

        {/* Solution Sub-pages */}
        <Route path="/solutions/on-demand" element={<OnDemand />} />
        <Route path="/solutions/house-moving" element={<HouseMoving />} />
        <Route path="/solutions/mero-upaya" element={<MeroUpaya />} />
        <Route path="/solutions/hyperlocal" element={<Hyperlocal />} />
        <Route path="/solutions/fulfillment" element={<Fulfillment />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />

      {/* Protected Admin Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/email" element={<Email />} />
        <Route path="/admin/career" element={<Career />} />
        <Route path="/admin/content" element={<ContentManager />} />
      </Route>


    </Routes>
  );
}

export default App;
