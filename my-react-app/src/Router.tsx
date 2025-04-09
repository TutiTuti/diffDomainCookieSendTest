import React from 'react';
import { Routes, Route } from "react-router-dom";
import Page from "./page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
}
