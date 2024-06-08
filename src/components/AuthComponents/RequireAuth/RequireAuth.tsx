import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { JwtPayload, jwtDecode } from "jwt-decode";

interface IJwtPayload extends JwtPayload {
    UserInfo: {
        roles: [number]
    };
}

const RequireAuth = ({ allowedRoles } : { allowedRoles: number[]}) => {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded : IJwtPayload | undefined = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined

  console.log("Decoded: ", decoded);
  
  const roles = decoded?.UserInfo?.roles || [] ;

  console.log("Roles: ", roles);
  
  //roles.authority         
  // "ADMIN"

  return (
    roles.find(role => allowedRoles?.includes(role))
    ? <Outlet />
    : auth?.accessToken
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;