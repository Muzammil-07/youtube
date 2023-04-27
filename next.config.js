/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_KEY:process.env.NEXT_APP_API_KEY
  },
    images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/**',
      },
  
      {
        protocol: 'https',
        hostname: 'www.freeiconspng.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "i.ytimg.com",
        port: '',
        pathname: '/**',
      }, 
      {
        protocol: 'https',
        hostname: '"yt3.ggpht.com"',
        port: '',
        pathname: '/**',
      }
  ]
  }
}


module.exports = nextConfig
