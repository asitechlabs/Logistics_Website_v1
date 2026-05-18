import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('admin_auth') === 'true';

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/admin" replace />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};

export default ProtectedRoute;
