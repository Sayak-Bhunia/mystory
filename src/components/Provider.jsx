'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
