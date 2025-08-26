import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

showRoutes(app)

// Export routes for SSG
export const ssgRoutes = [
  '/',
  '/typography-demo'
]

export default app
 