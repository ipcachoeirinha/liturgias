import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import defaultConfig from '../config/revealjs-default.json'
import { getAssetUrlBuilder } from '../lib'
import { presentationSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Desfrutando da Verdadeira Liberdade em Cristo - 17 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-386", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-110-a", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-86", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-135", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" }
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
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-6xl tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">PRELÚDIO</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">ADORAMOS AO DEUS QUE NOS LIVROU DA ESCRAVIDÃO ESPIRITUAL</h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA
              BÍBLICA ALTERNADA:</span> SALMO 107:1-16</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO DE
              ADORAÇÃO</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> TESTEMUNHO,
              nº 386</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-386")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-4xl mb-16 tracking-wide">DESEJAMOS TER NOSSAS VONTADES ALINHADAS COM A DE DEUS</h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA
              BÍBLICA UNÍSSONA:</span> 1 JOÃO 2:15-17</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO
              SILENCIOSA</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO DE
              ARREPENDIMENTO</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span>
              CRER E OBSERVAR, nº 110-A</li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-4xl mb-16 tracking-wide">DESEJAMOS TER NOSSAS VONTADES ALINHADAS COM A DE DEUS</h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA
              BÍBLICA UNÍSSONA:</span> 1 JOÃO 2:15-17</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO
              SILENCIOSA</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO DE
              ARREPENDIMENTO</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span>
              CRER E OBSERVAR, nº 110-A</li>
          </ul>
          <audio data-autoPlay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-110-a")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-4xl mb-16 tracking-wide">SOMOS CAPACITADOS PELO ESPÍRITO A VENCER AS TENTAÇÕES
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">LEITURA
              BÍBLICA UNÍSSONA:</span> GÁLATAS 5:16-18</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO DE GRATIDÃO</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> ESPÍRITO DO ETERNO DEUS, nº 86</li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-86")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-6xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">EVITAMOS UMA VIDA DE PRÁTICAS LEGALISTAS
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO PELAS
              CRIANÇAS</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">PREGAÇÃO: GÁLATAS
              4:8-20</span> (Rev. Arnaldo Matias)</li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">CRESCEMOS EM MATURIDADE ESPIRITUAL
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> MAIS DE CRISTO, nº 135</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">CONSAGRAÇÃO DE DÍZIMOS E OFERTAS</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO FINAL</span>
            </li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">BENÇÃO
              APOSTÓLICA</span></li>
          </ul>
        </section>
        <section data-background-video={getAssetUrl("ipcachoeirinha/hino-135")} data-autoplay></section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl mb-8 tracking-wider">DESFRUTANDO DA VERDADEIRA LIBERDADE EM CRISTO</h1>
          <h2 className="text-green-800 font-bold text-5xl mb-16 tracking-wide">CRESCEMOS EM MATURIDADE ESPIRITUAL
          </h2>

          <ul className="list-disc text-left mt-2">
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">HINO:</span> MAIS DE CRISTO, nº 135</li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">CONSAGRAÇÃO DE DÍZIMOS E OFERTAS</span></li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">ORAÇÃO FINAL</span>
            </li>
            <li className="text-green-800 text-5xl mb-8 tracking-wider"><span className="font-bold">BENÇÃO
              APOSTÓLICA</span></li>
          </ul>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">POSLÚDIO</h1>
        </section>
        <section data-background={getAssetUrl("ipcachoeirinha/cruz-wallpaper-light")}>
          <h1 className="text-yellow-600 font-bold text-7xl tracking-wider">AVISOS</h1>
        </section>
      </div>
    </div>
  )
}
