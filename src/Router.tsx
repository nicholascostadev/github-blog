import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export const Router = () => {
  const location = useLocation()
  return (
    <Routes location={location.pathname} key={location.pathname}>
      <Route path="/:username/:repo" element={<Home />} />
      <Route path="/:username/:repo/issues/:issueId" element={<Post />} />
    </Routes>
  )
}
