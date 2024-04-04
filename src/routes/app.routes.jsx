import { Routes, Route } from "react-router-dom"

import { Preview } from "../pages/Preview"
import { Home } from "../pages/Home"
import { New } from "../pages/New"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/new" element={<New />} />
    </Routes>
  )
}
