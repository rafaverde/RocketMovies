import { Routes, Route } from "react-router-dom"

import { Preview } from "../pages/Preview"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/preview" element={<Preview />} />
    </Routes>
  )
}
