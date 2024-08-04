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

const PAGE_TITLE = "O Compromisso Missionário da Igreja - 04 de Agosto de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-282", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-71", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-58", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-319", extension: "mp4", resourceType: "video" },
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

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
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
          <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
          <SubTitle>ESTÁ FUNDAMENTADA NO DESEJO DE VER DEUS SENDO GLORIFICADO POR TODOS OS POVOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 117</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A GRANDE COMISSÃO, nº 282</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-282")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
          <SubTitle>É ENFRAQUECIDO QUANDO O CORAÇÃO SE AFASTA DE DEUS E PRIORIZA AS COISAS DESTE MUNDO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: OSÉIAS 14.1</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: COLOSSENSES 3.1-4</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: HEBREUS 12.1-2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERDÃO, nº 71</LiturgyStep>
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
          <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
          <SubTitle>É ENFRAQUECIDO QUANDO O CORAÇÃO SE AFASTA DE DEUS E PRIORIZA AS COISAS DESTE MUNDO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: OSÉIAS 14.1</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: COLOSSENSES 3.1-4</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: HEBREUS 12.1-2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERDÃO, nº 71</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-71")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
          <SubTitle>É FORTALECIDO PELO ENTENDIMENTO DA MISSÃO DE DEUS ENVIANDO SEU FILHO AO MUNDO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: JOÃO 3.16-21</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OFERTAS, nº 58</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-58")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
          <SubTitle>EXPANDE PROGRESSIVAMENTE A MEDIDA QUE O SENHOR CONCEDE AMADURECIMENTO ESPIRITUAL PARA O SEU POVO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 4.1-18 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O COMPROMISSO MISSIONÁRIO DA IGREJA</MainTitle>
          <SubTitle>DESPERTA A LIDERANÇA PARA PROJETAR A EVANGELIZAÇÃO DE NOVOS CAMPOS</SubTitle>

          <LiturgySteps>
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
