import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import { cloudinary } from '../cloudinary.server'
import defaultConfig from '../config/revealjs-default.json'
import { getAssetUrlBuilder } from '../lib'
import { presentationSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "A Transformação pela Graça - 03 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/juliano-son-so-em-jesus", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-14", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-217", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-341", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-320", extension: "mp4", resourceType: "video" },
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
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
          <h1 className="text-yellow-600 font-bold text-6xl tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <section data-background-video={getAssetUrl("ipcachoeirinha/juliano-son-so-em-jesus")} data-autoplay></section>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">ENCONTRAM ÂNIMO NA PRESENÇA DO SENHOR</h2>

          <ul className="list-disc text-left mt-2">
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">LEITURA
              UNÍSSONA:</span> 1 SAMUEL 30:1-6</li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">ORAÇÃO DE
              ADORAÇÃO</span></li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">HINO:</span> LOUVOR,
              nº 14</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-14")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-4xl mb-16 tracking-wide">ENTREGAM TUDO NAS MÃOS DO REDENTOR</h2>

          <ul className="list-disc text-left mt-2">
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">LEITURA
              ALTERNADA:</span> SALMO 37</li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">ORAÇÃO
              SILENCIOSA</span></li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">ORAÇÃO DE
              CONFISSÃO</span></li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">HINO:</span>
              DESPRENDIMENTO, nº 217</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-217")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">ALEGRAM-SE POR PERTENCER AO SALVADOR
          </h2>

          <ul className="list-disc text-left mt-2">
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">LEITURA
              ALTERNADA:</span> 1 PEDRO 1:3-8</li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">SANTA CEIA</span></li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">CONSAGRAÇÃO DOS
              DÍZIMOS E OFERTAS</span></li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">HINO:</span> VERA PÁSCOA, nº 341</li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/santa-ceia-bg")}>
          <h1 class="text-yellow-600 font-bold text-7xl tracking-wider">SANTA CEIA</h1>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-341")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-6xl mb-8 tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">ALIMENTAM-SE CONTINUAMENTE COM A PALAVRA DE DEUS
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO PELAS
              CRIANÇAS</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">PREGAÇÃO: GÁLATAS
              3:26-4:7</span> (Rev. Arnaldo Matias)</li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">LEVAM ESPERANÇA PARA AS PESSOAS AO SEU REDOR
          </h2>

          <ul className="list-disc text-left mt-2">
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">HINO:</span> BRILHA
              NO VIVER, nº 320</li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">ORAÇÃO FINAL</span>
            </li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">BENÇÃO
              APOSTÓLICA</span></li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-320")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">OS FILHOS E HERDEIROS EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">LEVAM ESPERANÇA PARA AS PESSOAS AO SEU REDOR
          </h2>

          <ul className="list-disc text-left mt-2">
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">HINO:</span> BRILHA
              NO VIVER, nº 320</li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">ORAÇÃO FINAL</span>
            </li>
            <li class="text-green-800 text-5xl mb-8 tracking-wider"><span class="font-bold">BENÇÃO
              APOSTÓLICA</span></li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <section data-background-video={getAssetUrl("ipcachoeirinha/juliano-son-so-em-jesus")} data-autoplay></section>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">AVISOS</h1>
        </section>
      </div>
    </div>
  )
}
