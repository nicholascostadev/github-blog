import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/:username/:repo" element={<Home />} />
      <Route path="/:username/:repo/issues/:issueId" element={<Post />} />
    </Routes>
  )
}
