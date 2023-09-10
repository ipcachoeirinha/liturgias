import { cssBundleHref } from "@remix-run/css-bundle"
import '../node_modules/reveal.js/dist/reset.css'
import '../node_modules/reveal.js/dist/reveal.css'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { useEffect } from 'react'

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
