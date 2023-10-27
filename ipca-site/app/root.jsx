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
        <div className='grid grid-rows-[1fr_auto] grid-cols-[100%] min-h-full'>
          <div>
            <Outlet />
          </div>
          <footer className='bg-slate-700 py-4 px-8 min-h-[260px]'>
            <div className='max-w-5xl m-auto'>
              <div className='flex flex-1'>
                <div>
                  <p className='text-slate-300 text-sm'>Av. Lídio Batista Soares, 996</p>
                  <p className='text-slate-300 text-sm'>CEP 94935-410 - COHAB</p>
                  <p className='text-slate-300 text-sm'>Cachoeirinha - RS</p>
                  <p className='text-slate-300 text-sm'>Telefone: (51) 98184-9919</p>
                  <p className='text-slate-300 text-sm'>CNPJ 15.210.813/0001-83</p>
                </div>
              </div>
              <div className=''>
                <Link className='text-green-50 text-sm' to={"/liturgias"}>Liturgias</Link>
              </div>
            </div>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
