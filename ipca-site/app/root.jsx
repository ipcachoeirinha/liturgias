import { cssBundleHref } from "@remix-run/css-bundle"
import '../node_modules/reveal.js/dist/reset.css'
import '../node_modules/reveal.js/dist/reveal.css'

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

export const links = () => [
  ...(cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
    {
      rel: "stylesheet",
      href: "/tailwind.css",
    }
  ] : []),
]

export default function App() {
  return (
    <html lang="pt-br" className='h-full'>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className='m-0 h-full'>
        
            <Outlet />
          
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
