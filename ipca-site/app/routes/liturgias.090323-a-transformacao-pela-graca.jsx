import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import { cloudinary } from '../cloudinary.server'
import defaultConfig from '../config/revealjs-default.json'
import { getAssetUrlBuilder } from '../lib'
import { presentationSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "A Transformação pela Graça - 03 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-372", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-78", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-62", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-320", extension: "mp4", resourceType: "video" },
]

export const meta = () => {
  return [
    { title: PAGE_TITLE },
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function Index() {
  const [mode, assets] = useLoaderData()
  
  useEffect(() => {
    window.Reveal = require('reveal.js').default
    
    if (window.Reveal) {
      const r = window.Reveal()
      r.initialize(defaultConfig)
    }
  })

  const getAssetUrl = getAssetUrlBuilder(mode, assets)

  return (
    <div className="reveal">
      <div className="slides">
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">A TRANSFORMAÇÃO PELA GRAÇA</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">PRELÚDIO</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">A TRANSFORMAÇÃO PELA GRAÇA</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">TRAZ ALEGRIA NA LEI DO SENHOR</h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA
              ALTERNADA:</span> SALMO 119:97-105</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO DE
              ADORAÇÃO</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> O
              CRENTE E A BÍBLIA, nº 372</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-372")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">A TRANSFORMAÇÃO PELA GRAÇA</h1>
          <h2 className="text-green-800 font-bold text-4xl mb-16 tracking-wide">ENSINA QUE CRISTO É O ÚNICO QUE
            CUMPRIU PERFEITAMENTE A LEI</h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA
              BÍBLICA:</span> MATEUS 5:17-20</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO
              SILENCIOSA</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO SUPLICANDO
              MATURIDADE ESPIRITUAL</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span>
              PERFEITA EXPIAÇÃO, nº 78</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-78")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">A TRANSFORMAÇÃO PELA GRAÇA</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">ACONTECE ATRAVÉS DA PALAVRA DE DEUS
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA BÍBLICA
              UNÍSSONA:</span> DEUTERONÔMIO 8:3</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO DE GRATIDÃO</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">CONSAGRAÇÃO DOS
              DÍZIMOS E OFERTAS</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> HINO DE
              GRATIDÃO, nº 62</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-62")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-6xl mb-8 tracking-wider">A TRANSFORMAÇÃO PELA GRAÇA</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">NOS CONVENCE DA IMERECIDA SALVAÇÃO
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO PELAS
              CRIANÇAS</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">PREGAÇÃO: GÁLATAS
              3:15-25</span> (Rev. Arnaldo Matias)</li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">A TRANSFORMAÇÃO PELA GRAÇA</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">É ANUNCIADA AOS PERDIDOS NA ESCURIDÃO
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> BRILHA
              NO VIVER, nº 320</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO FINAL</span>
            </li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">BENÇÃO
              APOSTÓLICA</span></li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-320")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">POSLÚDIO</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">AVISOS</h1>
        </section>
      </div>
    </div>
  )
}
