import React from 'react'
import Sales from './Sales'
import Stocks from './Stocks'
import Purchase from './Purchase'
import { Navigate, Route, Routes } from "react-router-dom";

function ComponentToRender() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Navigate to="/Purchases" replace />} />
            <Route path="/Stock" element={<Stocks />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Purchases" element={<Purchase />} />
        </Routes>
    </>
  )
}

export default ComponentToRender