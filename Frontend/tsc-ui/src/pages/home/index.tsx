import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../../components/dashboard';
import { useGlobalContext } from '../../services/context/globalContext';

export default function Home() {
    const {userDetails} = useGlobalContext();
    return userDetails ? <Dashboard/> : <Navigate to="/login"/>
}