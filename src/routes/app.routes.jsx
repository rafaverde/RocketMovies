import { Routes, Route } from "react-router-dom"

import { Preview } from "../pages/Preview"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Profile } from "../pages/Profile"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
