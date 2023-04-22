import { config } from 'config'
import { Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  const { routes } = config

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
    </Routes>
  )
}
