import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import defaultConfig from '../config/revealjs-default.json'
import { getAssetUrlBuilder } from '../lib'
import { presentationSlideRemixLoader } from '../lib.server'
import { createSlideSectionWithBackgroundImage } from '../components/ipca-default-theme/DefaultSlideSection'
import { RevealJsBaseElement } from '../components/RevealJsBaseElement'
import { MainTitle } from '../components/ipca-default-theme/MainTitle'
import { SubTitle } from '../components/ipca-default-theme/SubTitle'
import { LiturgySteps } from '../components/ipca-default-theme/LiturgyStepsList'
import { LITURGY_STEP_TYPES, LiturgyStep } from '../components/ipca-default-theme/LiturgyStep'
import { VideoSlide } from '../components/ipca-default-theme/VideoSlide'

const PAGE_TITLE = "A Igreja em Adoração - 11 de Agosto de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-1", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-74", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-19", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-319", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-269", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function SlidePage() {
  const [mode, assets] = useLoaderData()

  useEffect(() => {
    window.Reveal = require('reveal.js').default

    if (window.Reveal) {
      const r = window.Reveal()
      r.initialize({ ...defaultConfig, width: 1600 })
    }
  })

  const getAssetUrl = getAssetUrlBuilder(mode, assets)
  const SlideWithBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/cruz-wallpaper-light"))
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoplay><source
          type="audio/mpeg"

          src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


        />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>RECONHECE A SOBERANIA E BONDADE DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 145.14-18</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ROMANOS 11.36</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: APOCALIPSE 4.11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: DOXOLOGIA, nº 1</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-1")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>VALORIZA O SINCERO ARREPENDIMENTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 51.15-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
          </LiturgySteps>
        </section>
        <section>

          <MainTitle>ORAÇÃO SILENCIOSA</MainTitle>

          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/oracao-silenciosa-hino-208")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>VALORIZA O SINCERO ARREPENDIMENTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 51.15-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-74")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>HUMILDE ENTOA LOUVORES AO REI</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: COLOSSENSES 3.16</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 47.7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: REI SUBLIME, nº 19</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-19")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>PROCURA CIÊNCIA NA PALAVRA DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 4.19-30 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>CELEBRA A SALVAÇÃO EM JESUS CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OBREIROS EM MARCHA, nº 319</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-269")} />
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>A IGREJA EM ADORAÇÃO</MainTitle>
          <SubTitle>CELEBRA A SALVAÇÃO EM JESUS CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OBREIROS EM MARCHA, nº 319</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-319")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVISOS</MainTitle>
        </section>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
