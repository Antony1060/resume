import path from 'path'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => [
    {
      path: "/",
      template: "src/components/Home.tsx"
    }
  ],
  plugins: [
    'react-static-plugin-typescript',
    require.resolve('react-static-plugin-sitemap')
  ],
}
