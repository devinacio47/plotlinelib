import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://plotlinelib.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Get the path to your app directory
  const appDirectory = path.join(process.cwd(), 'app')
  
  // 2. Automatically find directories containing page.tsx or page.js files
  const routes = getRoutesFromDir(appDirectory)

  // 3. Map those directory paths into proper URLs
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}

// Helper function to recursively scan the app directory
function getRoutesFromDir(dir: string, baseRoute = ''): string[] {
  let routes: string[] = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // Skip Next.js internal/special folders like api routes, components, or groups e.g., (marketing)
      if (file.startsWith('_') || file.startsWith('api') || file.startsWith('.')) {
        continue
      }
      
      // Handle Route Groups like (auth) or (marketing) by not adding the parentheses to the URL
      const cleanFolder = file.startsWith('(') && file.endsWith(')') ? '' : file
      const nextBaseRoute = cleanFolder ? `${baseRoute}/${cleanFolder}` : baseRoute

      routes = routes.concat(getRoutesFromDir(fullPath, nextBaseRoute))
    } else if (file === 'page.tsx' || file === 'page.js') {
      // Found a page! If it's the root app/page.tsx, it maps to ''
      routes.push(baseRoute === '' ? '' : baseRoute)
    }
  }

  return routes
}