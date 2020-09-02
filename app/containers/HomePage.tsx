import React from 'react';
import Home from '../components/Home';
import Login from '../components/Login';

export default function HomePage() {
  if (localStorage.getItem('UUID') === null) {
    return <Login />;
  }
  return <Home />;
}
