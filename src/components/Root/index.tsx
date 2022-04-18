import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import React from 'react';
import Home from '../../pages/home';
import Index from '../../pages/detail';

export default function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<Index />} />
      </Routes>
    </Layout>
  );
}
