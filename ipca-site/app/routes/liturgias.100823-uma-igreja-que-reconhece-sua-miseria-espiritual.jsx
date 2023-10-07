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

const PAGE_TITLE = "Uma Igreja que Reconhece Sua<br/> Miséria Espiritual - 08 de Outubro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-32", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-74", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-88", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-288", extension: "mp4", resourceType: "video" },
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
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
        <SubTitle>ADORA REVERENTEMENTE AO SENHOR COM TODA HUMILDADE</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 147:1-6</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O DEUS FIÉL, nº 32</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-32")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
        <SubTitle>BUSCA INTENSAMENTE NO SENHOR A REDENÇÃO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 REIS 8:33-40</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 18:27</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
        <SubTitle>BUSCA INTENSAMENTE NO SENHOR A REDENÇÃO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 REIS 8:33-40</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 18:27</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
        </LiturgySteps>
        <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-74")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
        <SubTitle>É GRATA SINCERAMENTE AO SENHOR PELO SEU GRANDE AMOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 103:1-3</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: AMOR PERENE, nº 88</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-88")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
        <SubTitle>ANELA ALEGREMENTE POR OUVIR A EXPOSIÇÃO DAS ESCRITURAS</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: MATEUS 5:1-3 (Lic. Petró Jr.)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE RECONHECE SUA<br/> MISÉRIA ESPIRITUAL</MainTitle>
        <SubTitle>VIVE VERDADEIRAMENTE COMO CIDADÃO DO REINO DOS CÉUS</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A MENSAGEM REAL, nº 288</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-288")} />

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
