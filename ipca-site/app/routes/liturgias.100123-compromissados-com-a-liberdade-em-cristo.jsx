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

const PAGE_TITLE = "Compromissados com a Liberdade em Cristo - 01 de Outubro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-14", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-78", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-58", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-287", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function CompromissadosComALiberdadeEmCristo() {
  const [mode, assets] = useLoaderData()

  useEffect(() => {
    window.Reveal = require('reveal.js').default

    if (window.Reveal) {
      const r = window.Reveal()
      r.initialize({...defaultConfig, width: 1600 })
    }
  })

  const getAssetUrl = getAssetUrlBuilder(mode, assets)
  const SlideWithBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/cruz-wallpaper-light"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoPlay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
        <SubTitle>ATENDEMOS O CHAMADO DE ADORAÇÃO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 95:1-11</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVOR, nº 14</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-14")} />

      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
        <SubTitle>BUSCAMOS PERDÃO CONFIADOS NA CRUZ</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 53:1-12</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEITA EXPIAÇÃO, nº 78</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
        <SubTitle>BUSCAMOS PERDÃO CONFIADOS NA CRUZ</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 53:1-12</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEITA EXPIAÇÃO, nº 78</LiturgyStep>
        </LiturgySteps>
        <audio data-autoPlay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-78")} />

      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
        <SubTitle>RENDEMOS GRAÇAS AO DEUS FIEL</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 100:4-5</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OFERTAS, nº 58</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-58")} />

      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
        <SubTitle>SOMOS SANTIFICADOS PELA PALAVRA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: GÁLATAS 5:1-12 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>COMPROMISSADOS COM A LIBERDADE EM CRISTO</MainTitle>
        <SubTitle>AVANÇAMOS COM O EVANGELHO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: IGREJA, ALERTA!, nº 287</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-287")} />

      <SlideWithBackground>
        <MainTitle>POSLUDIO</MainTitle>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />

      <SlideWithBackground>
        <MainTitle>POSLUDIO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
